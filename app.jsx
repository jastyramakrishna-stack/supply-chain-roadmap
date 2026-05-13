const { useState, useEffect, useRef } = React;

// ── Gemini API config ─────────────────────────────────────────
const GEMINI_KEY = "AIzaSyB7hVVnWcbzXWDKui3INCN28OPhLpqVTpI";
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_KEY}`;

// ── Shared Gemini fetch helper ────────────────────────────────
function fetchAI(prompt, onChunk, onDone, onError, attempt = 1) {
  fetch(GEMINI_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { maxOutputTokens: 1000, temperature: 0.7 }
    })
  })
  .then(res => {
    // 429 = rate limit — retry up to 3 times with exponential backoff
    if (res.status === 429 && attempt <= 3) {
      const delay = attempt * 2000;
      console.warn(`Rate limited. Retrying in ${delay}ms (attempt ${attempt}/3)...`);
      onChunk(""); // keep spinner visible
      setTimeout(() => fetchAI(prompt, onChunk, onDone, onError, attempt + 1), delay);
      return null;
    }
    if (!res.ok) throw new Error(`Gemini API error: ${res.status}`);
    return res.json();
  })
  .then(data => {
    if (!data) return; // retry in progress
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
    if (!text) throw new Error("Empty response from Gemini");
    let i = 0;
    function tick() {
      if (i < text.length) {
        onChunk(text.slice(i, i + 6));
        i += 6;
        setTimeout(tick, 10);
      } else {
        onDone();
      }
    }
    tick();
  })
  .catch(onError);
}

// ── Shared markdown renderer ──────────────────────────────────
function renderMarkdown(text) {
  if (!text) return "";
  return text
    .replace(/^## (.+)$/gm, '<h2 class="drawer-h2">$1</h2>')
    .replace(/^### (.+)$/gm, '<h3 class="drawer-h3">$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/^[-•\*] (.+)$/gm, '<li class="drawer-li">$1</li>')
    .replace(/(<li[\s\S]+?<\/li>)/g, '<ul class="drawer-ul">$1</ul>')
    .replace(/<\/ul>\s*<ul class="drawer-ul">/g, '')
    .replace(/\n{2,}/g, '</p><p class="drawer-p">')
    .replace(/^(?!<[hul])(.+)$/gm, '<p class="drawer-p">$1</p>')
    .replace(/<p class="drawer-p"><\/p>/g, '');
}

// ── Badge colour mapping ──────────────────────────────────────
function badgeClass(badge) {
  if (!badge) return "";
  const b = badge.toLowerCase();
  if (b.includes("start"))    return "section-badge section-badge--start";
  if (b.includes("core"))     return "section-badge section-badge--core";
  if (b.includes("analyt"))   return "section-badge section-badge--analytical";
  if (b.includes("operat"))   return "section-badge section-badge--operations";
  if (b.includes("digital"))  return "section-badge section-badge--digital";
  if (b.includes("advanced")) return "section-badge section-badge--advanced";
  if (b.includes("data"))     return "section-badge section-badge--data";
  return "section-badge section-badge--default";
}

// ── Topic Drawer (second panel) ───────────────────────────────
function TopicDrawer({ topic, sectionTitle, onClose }) {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  }, [content]);

  useEffect(() => {
    if (!topic) return;
    setContent(""); setLoading(true); setError(null);

    const prompt = `You are an expert supply chain educator. Explain this specific supply chain topic: "${topic}" which belongs to the section: "${sectionTitle}".

Structure your response with these markdown sections:
## What is it?
Clear concise definition (2-3 sentences).

## How it works
Key mechanics or process explained simply (3-4 sentences).

## Key Concepts
Bullet list of 4-6 core concepts, formulas, or frameworks.

## Real-World Example
A specific named example with company name, numbers, and outcome (3-5 sentences). Make it concrete and memorable.

## Key Takeaway
One powerful sentence summarising why this matters in practice.

Be specific and practical. Use real companies and real numbers where possible.`;

    fetchAI(
      prompt,
      (chunk) => setContent(prev => prev + chunk),
      () => setLoading(false),
      (err) => {
        setError("Unable to load explanation. Please check your API key or internet connection.");
        setLoading(false);
        console.error(err);
      }
    );
  }, [topic]);

  return (
    <aside className="topic-drawer-panel" role="dialog" aria-modal="true" aria-label={`${topic} detail`}>
      <div className="drawer-header">
        <div className="drawer-header-inner">
          <span className="drawer-eyebrow">Topic Detail</span>
          <h2 className="drawer-title">{topic}</h2>
          <span className="drawer-parent-label">in {sectionTitle}</span>
        </div>
        <button className="drawer-close" onClick={onClose} aria-label="Close topic panel">✕</button>
      </div>

      <div className="drawer-content" ref={contentRef}>
        {loading && !content && (
          <div className="drawer-loading">
            <span className="drawer-spinner" />
            <span>Generating explanation…</span>
          </div>
        )}
        {error && <p className="drawer-error">{error}</p>}
        {content && (
          <div className="drawer-body" dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }} />
        )}
        {loading && content && <span className="drawer-cursor">▌</span>}
      </div>

      <div className="drawer-footer">
        <span className="drawer-ai-label">✦ Gemini AI · Supply Chain Roadmap</span>
        <button className="drawer-close-btn" onClick={onClose}>← Section</button>
      </div>
    </aside>
  );
}

// ── Section Drawer (first panel) ──────────────────────────────
function SectionDrawer({ section, onClose }) {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTopic, setActiveTopic] = useState(null);
  const contentRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  }, [content]);

  useEffect(() => {
    if (!section) return;
    setContent(""); setLoading(true); setError(null); setActiveTopic(null);

    const prompt = `You are an expert supply chain educator. Give a concise overview of this supply chain section: "${section.title}".

Structure your response with these markdown sections:
## What is it?
Clear concise definition (2-3 sentences).

## Why it matters
Business impact and strategic importance (2-3 sentences).

## Key Concepts
Bullet list of 4-5 core concepts in this section.

## Key Metrics / KPIs
Bullet list of 3-4 metrics used to measure success here.

Topics covered: ${section.items.join(", ")}.
Be concise — this is an overview. Users click topic pills for deep-dives.`;

    fetchAI(
      prompt,
      (chunk) => setContent(prev => prev + chunk),
      () => setLoading(false),
      (err) => {
        setError("Unable to load explanation. Please check your API key or internet connection.");
        setLoading(false);
        console.error(err);
      }
    );
  }, [section]);

  return (
    <>
      <div className="drawer-backdrop" onClick={onClose} />

      <aside className="drawer-panel" role="dialog" aria-modal="true" aria-label={`${section.title} detail`}>

        <div className="drawer-header">
          <div className="drawer-header-inner">
            <span className="drawer-eyebrow">Deep Dive</span>
            <h2 className="drawer-title">{section.title}</h2>
            {section.badge && (
              <span className={`drawer-badge ${badgeClass(section.badge)}`}>
                {section.badge}
              </span>
            )}
          </div>
          <button className="drawer-close" onClick={onClose} aria-label="Close drawer">✕</button>
        </div>

        <div className="drawer-topics">
          <p className="drawer-topics-label">Explore a topic →</p>
          {section.items.map((item, i) => (
            <span
              key={i}
              className={`drawer-topic-pill ${activeTopic === item ? "drawer-topic-pill--active" : ""}`}
              onClick={() => setActiveTopic(activeTopic === item ? null : item)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === "Enter" && setActiveTopic(activeTopic === item ? null : item)}
            >
              {item}
            </span>
          ))}
        </div>

        <div className="drawer-content" ref={contentRef}>
          {loading && !content && (
            <div className="drawer-loading">
              <span className="drawer-spinner" />
              <span>Generating section overview…</span>
            </div>
          )}
          {error && <p className="drawer-error">{error}</p>}
          {content && (
            <div className="drawer-body" dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }} />
          )}
          {loading && content && <span className="drawer-cursor">▌</span>}
        </div>

        <div className="drawer-footer">
          <span className="drawer-ai-label">✦ Gemini AI · Supply Chain Roadmap</span>
          <button className="drawer-close-btn" onClick={onClose}>← Roadmap</button>
        </div>

        {activeTopic && (
          <TopicDrawer
            topic={activeTopic}
            sectionTitle={section.title}
            onClose={() => setActiveTopic(null)}
          />
        )}
      </aside>
    </>
  );
}

// ── Section Card ──────────────────────────────────────────────
function RoadmapSection({ section, index, onOpen }) {
  return (
    <div
      className="section-card"
      onClick={() => onOpen(section)}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === "Enter" && onOpen(section)}
    >
      <div className="section-header">
        {section.badge && (
          <div className="section-badge-wrap">
            <span className={badgeClass(section.badge)}>{section.badge}</span>
          </div>
        )}
        <h2 className="section-title">{index + 1}. {section.title}</h2>
      </div>
      <ul className="section-items">
        {section.items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
      <div className="section-cta">Explore topic →</div>
    </div>
  );
}

// ── Main App ──────────────────────────────────────────────────
function App() {
  const [query, setQuery] = useState("");
  const [activeSection, setActiveSection] = useState(null);

  const filtered = roadmapData.map(section => {
    if (!query.trim()) return section;
    const q = query.toLowerCase();
    const matchedItems = section.items.filter(item => item.toLowerCase().includes(q));
    if (
      section.title.toLowerCase().includes(q) ||
      (section.badge && section.badge.toLowerCase().includes(q))
    ) return section;
    if (matchedItems.length === 0) return null;
    return { ...section, items: matchedItems };
  }).filter(Boolean);

  useEffect(() => {
    const handler = e => { if (e.key === "Escape") setActiveSection(null); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      <div className="meta">
        <p>
          Covers foundations → planning → forecasting → replenishment → systems → analytics → modern SC.
          <span className="meta-hint"> Click any section to explore. Click a topic pill for a deep-dive with examples.</span>
        </p>
      </div>

      <div style={{ marginTop: "1rem", marginBottom: "1.5rem" }}>
        <input
          type="text"
          placeholder="Search topics (e.g., ARIMA, S&OP, EOQ, safety stock)..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          style={{
            width: "100%",
            padding: "0.55rem 0.7rem",
            borderRadius: "6px",
            border: "1px solid rgba(255,255,255,0.18)",
            background: "#0f1424",
            color: "#f5f5f5",
            fontSize: "0.9rem",
            outline: "none"
          }}
        />
      </div>

      <div className="roadmap">
        {filtered.length > 0 ? (
          filtered.map((section, index) => (
            <RoadmapSection
              key={section.title}
              section={section}
              index={index}
              onOpen={setActiveSection}
            />
          ))
        ) : (
          <div style={{ padding: "2rem", color: "var(--text-dim)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>
            No results for "{query}"
          </div>
        )}
      </div>

      {activeSection && (
        <SectionDrawer
          section={activeSection}
          onClose={() => setActiveSection(null)}
        />
      )}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
