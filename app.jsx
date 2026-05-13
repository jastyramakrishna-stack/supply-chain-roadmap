const { useState, useEffect, useRef } = React;

// ── Topic Drawer (second panel) ──────────────────────────────
function TopicDrawer({ topic, sectionTitle, onClose }) {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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
    if (!topic) return;
    setContent(""); setLoading(true); setError(null);

    const prompt = `You are an expert supply chain educator. Explain the specific supply chain topic: "${topic}" which is part of the broader section: "${sectionTitle}".

Structure your response with these sections using markdown:
## What is it?
A clear, concise definition (2-3 sentences).

## How it works
The key mechanics or process explained simply (3-4 sentences).

## Key Concepts
A bullet list of 4-6 core concepts, formulas, or frameworks.

## Real-World Example
A specific, named real-world example with company name, numbers, and outcome (3-5 sentences). Make this concrete and memorable.

## Key Takeaway
One powerful sentence summarising why this matters in practice.

Be specific, practical, and use real companies and real numbers where possible.`;

    fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        stream: true,
        messages: [{ role: "user", content: prompt }]
      })
    })
    .then(res => {
      if (!res.ok) throw new Error(`API error: ${res.status}`);
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      function read() {
        reader.read().then(({ done, value }) => {
          if (done) { setLoading(false); return; }
          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop();
          lines.forEach(line => {
            if (!line.startsWith("data: ")) return;
            const data = line.slice(6).trim();
            if (data === "[DONE]") return;
            try {
              const parsed = JSON.parse(data);
              const delta = parsed?.delta?.text || parsed?.content?.[0]?.text || "";
              if (delta) setContent(prev => prev + delta);
            } catch (_) {}
          });
          read();
        });
      }
      read();
    })
    .catch(err => {
      setError("Unable to load explanation. Please try again.");
      setLoading(false);
      console.error(err);
    });
  }, [topic]);

  function renderMarkdown(text) {
    if (!text) return "";
    return text
      .replace(/^## (.+)$/gm, '<h2 class="drawer-h2">$1</h2>')
      .replace(/^### (.+)$/gm, '<h3 class="drawer-h3">$1</h3>')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/^[-•] (.+)$/gm, '<li class="drawer-li">$1</li>')
      .replace(/(<li[\s\S]+?<\/li>)/g, '<ul class="drawer-ul">$1</ul>')
      .replace(/<\/ul>\s*<ul class="drawer-ul">/g, '')
      .replace(/\n{2,}/g, '</p><p class="drawer-p">')
      .replace(/^(?!<[hul])(.+)$/gm, '<p class="drawer-p">$1</p>')
      .replace(/<p class="drawer-p"><\/p>/g, '');
  }

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
          <div
            className="drawer-body"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }}
          />
        )}
        {loading && content && <span className="drawer-cursor">▌</span>}
      </div>

      <div className="drawer-footer">
        <span className="drawer-ai-label">✦ AI-generated · Supply Chain Roadmap</span>
        <button className="drawer-close-btn" onClick={onClose}>← Section</button>
      </div>
    </aside>
  );
}

// ── Section Drawer (first panel) ─────────────────────────────
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

    const prompt = `You are an expert supply chain educator. Give an overview of the supply chain section: "${section.title}".

Structure your response with these sections using markdown:
## What is it?
A clear, concise definition (2-3 sentences).

## Why it matters
The business impact and strategic importance (2-3 sentences).

## Key Concepts
A bullet list of 4-5 core concepts within this section.

## Key Metrics / KPIs
A bullet list of 3-4 metrics used to measure success in this area.

Topics in this section include: ${section.items.join(", ")}.
Click any topic pill above to get a deep-dive with real-world examples.
Be concise — this is a section overview, not a full explanation.`;

    fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        stream: true,
        messages: [{ role: "user", content: prompt }]
      })
    })
    .then(res => {
      if (!res.ok) throw new Error(`API error: ${res.status}`);
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      function read() {
        reader.read().then(({ done, value }) => {
          if (done) { setLoading(false); return; }
          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop();
          lines.forEach(line => {
            if (!line.startsWith("data: ")) return;
            const data = line.slice(6).trim();
            if (data === "[DONE]") return;
            try {
              const parsed = JSON.parse(data);
              const delta = parsed?.delta?.text || parsed?.content?.[0]?.text || "";
              if (delta) setContent(prev => prev + delta);
            } catch (_) {}
          });
          read();
        });
      }
      read();
    })
    .catch(err => {
      setError("Unable to load explanation. Please try again.");
      setLoading(false);
      console.error(err);
    });
  }, [section]);

  function renderMarkdown(text) {
    if (!text) return "";
    return text
      .replace(/^## (.+)$/gm, '<h2 class="drawer-h2">$1</h2>')
      .replace(/^### (.+)$/gm, '<h3 class="drawer-h3">$1</h3>')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/^[-•] (.+)$/gm, '<li class="drawer-li">$1</li>')
      .replace(/(<li[\s\S]+?<\/li>)/g, '<ul class="drawer-ul">$1</ul>')
      .replace(/<\/ul>\s*<ul class="drawer-ul">/g, '')
      .replace(/\n{2,}/g, '</p><p class="drawer-p">')
      .replace(/^(?!<[hul])(.+)$/gm, '<p class="drawer-p">$1</p>')
      .replace(/<p class="drawer-p"><\/p>/g, '');
  }

  return (
    <>
      <div className="drawer-backdrop" onClick={onClose} />

      <aside className="drawer-panel" role="dialog" aria-modal="true" aria-label={`${section.title} detail`}>

        <div className="drawer-header">
          <div className="drawer-header-inner">
            <span className="drawer-eyebrow">Deep Dive</span>
            <h2 className="drawer-title">{section.title}</h2>
            {section.badge && <span className="drawer-badge">{section.badge}</span>}
          </div>
          <button className="drawer-close" onClick={onClose} aria-label="Close drawer">✕</button>
        </div>

        {/* Topic pills — click to open second panel */}
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
            <div
              className="drawer-body"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }}
            />
          )}
          {loading && content && <span className="drawer-cursor">▌</span>}
        </div>

        <div className="drawer-footer">
          <span className="drawer-ai-label">✦ AI-generated · Supply Chain Roadmap</span>
          <button className="drawer-close-btn" onClick={onClose}>← Roadmap</button>
        </div>

        {/* Second panel — slides in from the right of this drawer */}
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

// ── Section Card ─────────────────────────────────────────────
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
        <h2 className="section-title">
          {index + 1}. {section.title}
          {section.badge && <span className="section-badge">{section.badge}</span>}
        </h2>
      </div>
      <ul className="section-items">
        {section.items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
      <div className="section-cta">Explore topic →</div>
    </div>
  );
}

// ── Main App ─────────────────────────────────────────────────
function App() {
  const [query, setQuery] = useState("");
  const [activeSection, setActiveSection] = useState(null);

  const filtered = roadmapData.map(section => {
    if (!query.trim()) return section;
    const q = query.toLowerCase();
    const matchedItems = section.items.filter(item => item.toLowerCase().includes(q));
    if (section.title.toLowerCase().includes(q) || (section.badge && section.badge.toLowerCase().includes(q))) return section;
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
          Covers foundations → planning → systems → analytics → advanced topics.
          <span className="meta-hint"> Click any section to explore. Click a topic pill for a deep-dive with examples.</span>
        </p>
      </div>

      <div style={{ marginTop: "1rem", marginBottom: "1.5rem" }}>
        <input
          type="text"
          placeholder="Search topics (e.g., demand, S&OP, ERP)..."
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
        {filtered.map((section, index) => (
          <RoadmapSection
            key={section.title}
            section={section}
            index={index}
            onOpen={setActiveSection}
          />
        ))}
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
