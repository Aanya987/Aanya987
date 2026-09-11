const CATEGORIES = [
  { title: "Languages", items: ["Python", "Java", "SQL", "C++"] },
  { title: "AI / ML", items: ["Machine Learning", "Deep Learning", "NLP", "Generative AI", "LLMs", "Prompt Engineering"] },
  { title: "Agentic AI", items: ["LangGraph", "LangChain", "RAG", "AI Agents", "Vector Databases", "AI Automation"] },
  { title: "Data Science", items: ["NumPy", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn", "EDA"] },
  { title: "Frameworks", items: ["FastAPI", "Flask", "Streamlit", "TensorFlow", "Keras"] },
  { title: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "Redis"] },
  { title: "AI Tools", items: ["ChatGPT", "Claude", "Gemini", "GitHub Copilot", "Cursor", "Groq"] },
  { title: "Developer Tools", items: ["Git & GitHub", "VS Code", "Jupyter Notebook", "Postman", "Docker"] },
];

const LEARNING = ["MLOps", "System Design", "Advanced DSA", "Cloud (AWS)"];

export default function Skills() {
  return (
    <section id="skills" className="wrap reveal">
      <div className="sec-tag">Technical Stack</div>
      <div className="sec-title">Skills &amp; Expertise</div>

      <div className="skills-grid">
        {CATEGORIES.map((cat) => (
          <div className="skill-card" key={cat.title}>
            <h4>{cat.title}</h4>
            <ul>
              {cat.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="learning-row">
        {LEARNING.map((item) => (
          <span className="learning-chip" key={item}>
            <span className="dot" /> {item}
          </span>
        ))}
      </div>
      <p className="learning-note">Currently exploring — edit this list to whatever you&apos;re actually learning right now.</p>
    </section>
  );
}
