const { useState } = React;

function RoadmapSection({ section, index }) {
  return (
    <div className="section-card">
      <div className="section-header">
        <h2 className="section-title">
          {index + 1}. {section.title}
          {section.badge && (
            <span className="section-badge">{section.badge}</span>
          )}
        </h2>
      </div>

      <ul className="section-items">
        {section.items.map((item, i) => (
          <li key={i}>
            <a href={item.link} className="topic-link">
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const [query, setQuery] = useState("");

  const filtered = roadmapData
    .map((section) => {
      if (!query.trim()) return section;

      const q = query.toLowerCase();

      const matchedItems = section.items.filter((item) =>
        item.text.toLowerCase().includes(q)
      );

      if (
        section.title.toLowerCase().includes(q) ||
        (section.badge && section.badge.toLowerCase().includes(q))
      ) {
        return section;
      }

      if (matchedItems.length === 0) return null;

      return { ...section, items: matchedItems };
    })
    .filter(Boolean);

  return (
    <>
      <div className="meta">
        <p>
          Covers foundations → planning → systems → analytics → advanced topics → projects.
        </p>
      </div>

      <div style={{ marginTop: "1rem", marginBottom: "1.5rem" }}>
        <input
          type="text"
          placeholder="Search topics (e.g., demand, S&OP, ERP)..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
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
          <RoadmapSection key={section.title} section={section} index={index} />
        ))}
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
