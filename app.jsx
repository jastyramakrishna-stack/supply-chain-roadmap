const { useState, useEffect, useRef } = React;

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
function TopicDrawer({ topic, sectionTitle, topicContent, onClose }) {
  const contentRef = useRef(null);

  // Fallback if no hardcoded content for this topic
  const text = topicContent ||
    `## ${topic}\nDetailed content for this topic is coming soon.\n\n## How it relates to ${sectionTitle}\nThis topic is a key component of ${sectionTitle} in modern supply chain management.`;

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
        <div className="drawer-body" dangerouslySetInnerHTML={{ __html: renderMarkdown(text) }} />
      </div>

      <div className="drawer-footer">
        <span className="drawer-ai-label">✦ Supply Chain Roadmap</span>
        <button className="drawer-close-btn" onClick={onClose}>← Section</button>
      </div>
    </aside>
  );
}

// ── Section Drawer (first panel) ──────────────────────────────
function SectionDrawer({ section, onClose }) {
  const [activeTopic, setActiveTopic] = useState(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  // Close topic on Escape
  useEffect(() => {
    const handler = e => { if (e.key === "Escape") activeTopic ? setActiveTopic(null) : onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [activeTopic]);

  const overviewText = section.content?.overview ||
    `## ${section.title}\nThis section covers key supply chain concepts and best practices.\n\n## Topics covered\n${section.items.map(i => `- ${i}`).join('\n')}`;

  const topicContent = activeTopic
    ? (section.content?.topics?.[activeTopic] || null)
    : null;

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

        <div className="drawer-content">
          <div className="drawer-body" dangerouslySetInnerHTML={{ __html: renderMarkdown(overviewText) }} />
        </div>

        <div className="drawer-footer">
          <span className="drawer-ai-label">✦ Supply Chain Roadmap</span>
          <button className="drawer-close-btn" onClick={onClose}>← Roadmap</button>
        </div>

        {activeTopic && (
          <TopicDrawer
            topic={activeTopic}
            sectionTitle={section.title}
            topicContent={topicContent}
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
    const handler = e => { if (e.key === "Escape" && !activeSection) return; };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [activeSection]);

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
