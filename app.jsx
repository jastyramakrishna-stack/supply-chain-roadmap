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

// ── Theme config per badge (colour + card style only) ────────
const THEMES = {
  start: {
    badgeClass: "section-badge section-badge--start",
    cardTheme:  "card-theme-start",
    accent:     "#b45309",
  },
  core: {
    badgeClass: "section-badge section-badge--core",
    cardTheme:  "card-theme-core",
    accent:     "#1d4ed8",
  },
  analytical: {
    badgeClass: "section-badge section-badge--analytical",
    cardTheme:  "card-theme-analytical",
    accent:     "#6d28d9",
  },
  operations: {
    badgeClass: "section-badge section-badge--operations",
    cardTheme:  "card-theme-operations",
    accent:     "#15803d",
  },
  digital: {
    badgeClass: "section-badge section-badge--digital",
    cardTheme:  "card-theme-digital",
    accent:     "#0e7490",
  },
  advanced: {
    badgeClass: "section-badge section-badge--advanced",
    cardTheme:  "card-theme-advanced",
    accent:     "#b91c1c",
  },
  data: {
    badgeClass: "section-badge section-badge--data",
    cardTheme:  "card-theme-data",
    accent:     "#0369a1",
  },
};

const DEFAULT_THEME = {
  badgeClass: "section-badge section-badge--default",
  cardTheme:  "card-theme-start",
  accent:     "#d97706",
};

// ── One unique image per section (consistent 800×200 crop) ───
// Index matches roadmapData order — every section gets a different photo
const SECTION_IMAGES = [
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=200&fit=crop&q=70&auto=format", // SC Foundations — logistics hub
  "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=200&fit=crop&q=70&auto=format", // Core Planning — operations floor
  "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=200&fit=crop&q=70&auto=format", // Forecasting Fundamentals — data
  "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=800&h=200&fit=crop&q=70&auto=format", // Forecasting Models — forecast trend chart ✓
  "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&h=200&fit=crop&q=70&auto=format", // Forecasting Parameters — tech inputs
  "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&h=200&fit=crop&q=70&auto=format", // Replenishment — warehouse shelves
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=200&fit=crop&q=70&auto=format", // Tools & Systems — tech workspace ✓
  "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=200&fit=crop&q=70&auto=format", // Analytics & Optimization — math optimization
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=200&fit=crop&q=70&auto=format", // Modern SC — digital/AI
  "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&h=200&fit=crop&q=70&auto=format", // Industry Knowledge — factory line ✓
];

function getTheme(badge) {
  if (!badge) return DEFAULT_THEME;
  const b = badge.toLowerCase();
  if (b.includes("start"))    return THEMES.start;
  if (b.includes("core"))     return THEMES.core;
  if (b.includes("analyt"))   return THEMES.analytical;
  if (b.includes("operat"))   return THEMES.operations;
  if (b.includes("digital"))  return THEMES.digital;
  if (b.includes("advanced")) return THEMES.advanced;
  if (b.includes("data"))     return THEMES.data;
  return DEFAULT_THEME;
}

function badgeClass(badge) {
  return getTheme(badge).badgeClass;
}

// ── Topic Drawer (second panel) ───────────────────────────────
function TopicDrawer({ topic, sectionTitle, sectionBadge, topicContent, onClose }) {
  const contentRef = useRef(null);

  // Fallback if no hardcoded content for this topic
  const text = topicContent ||
    `## ${topic}\nDetailed content for this topic is coming soon.\n\n## How it relates to ${sectionTitle}\nThis topic is a key component of ${sectionTitle} in modern supply chain management.`;

  const topicTheme = getTheme(sectionBadge);
  return (
    <aside
      className="topic-drawer-panel drawer-light"
      style={{ "--card-accent": topicTheme.accent }}
      role="dialog" aria-modal="true" aria-label={`${topic} detail`}
    >
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
          {activeTopic && topicContent ? (
            <div className="drawer-body" dangerouslySetInnerHTML={{ __html: renderMarkdown(topicContent) }} />
          ) : activeTopic && !topicContent ? (
            <div className="drawer-body">
              <p className="drawer-p" style={{color:"var(--text-mid)",fontStyle:"italic"}}>
                Content for "{activeTopic}" coming soon.
              </p>
            </div>
          ) : (
            <div className="drawer-body" dangerouslySetInnerHTML={{ __html: renderMarkdown(overviewText) }} />
          )}
        </div>

        <div className="drawer-footer">
          <span className="drawer-ai-label">✦ Supply Chain Roadmap</span>
          {activeTopic ? (
            <button className="drawer-close-btn" onClick={() => setActiveTopic(null)}>← Back</button>
          ) : (
            <button className="drawer-close-btn" onClick={onClose}>← Roadmap</button>
          )}
        </div>
      </aside>
    </>
  );
}

// ── Section Card ──────────────────────────────────────────────
function RoadmapSection({ section, index, onOpen }) {
  const theme = getTheme(section.badge);
  const bannerSrc = SECTION_IMAGES[index] || SECTION_IMAGES[0];
  return (
    <div
      className={`section-card ${theme.cardTheme}`}
      style={{ "--card-accent": theme.accent, "--card-bg-color": "" }}
      onClick={() => onOpen(section)}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === "Enter" && onOpen(section)}
    >
      {/* Unique banner image per section — consistent 800×200 crop */}
      <div className="section-card-banner">
        <img src={bannerSrc} alt="" loading="lazy" />
      </div>

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
          Covers foundations → planning → forecasting → replenishment → systems → analytics → modern SC → industry.
          <br />
          <span className="meta-hint">Click any section to explore. Click a topic pill for a deep-dive with examples.</span>
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
