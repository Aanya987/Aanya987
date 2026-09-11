const PROJECTS = [
  {
    title: "Walmart Sales Forecasting & Pricing",
    href: "https://github.com/Aanya987/walmart-sales-forecasting-pricing",
    tags: ["Python", "Random Forest", "Streamlit", "Pandas"],
    desc: "Random Forest model forecasting weekly sales across 45 stores at 4.85% MAPE — 30% better than baseline. Deployed a dynamic pricing and stock recommendation dashboard.",
  },
  {
    title: "MediRun — Medical Equipment Delivery",
    href: "https://github.com/Aanya987/medirun-sault",
    tags: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    desc: "India's first on-demand medical equipment delivery platform for real-time wheelchair, nebulizer, and oxygen cylinder delivery. Full-stack SaaS app with secure auth, deployed on Vercel.",
  },
  {
    title: "SmartForm — Registration Platform",
    href: "https://github.com/Aanya987/registration-form",
    tags: ["Python", "SQL", "Anvil", "JavaScript"],
    desc: "Full-stack dynamic registration platform with a structured SQL schema, real-time form handling, and a responsive, custom-themed UI.",
  },
  {
    title: "Modular Cotton-Harvesting Robot",
    href: null,
    tags: ["OpenCV", "Computer Vision", "Robotics"],
    desc: "Low-cost modular robot using OpenCV-based computer vision to autonomously detect and harvest cotton bolls, with an electrostatic spray nozzle to cut chemical overuse. Published at ISCiNCT 2026.",
    meta: "Paper ID 666 · May 2026",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="wrap reveal">
      <div className="sec-tag">Selected Work</div>
      <div className="sec-title">Projects</div>
      <div className="proj-grid">
        {PROJECTS.map((p) => (
          <div className="proj-card" key={p.title}>
            <h3>
              {p.href ? (
                <a href={p.href} target="_blank" rel="noopener noreferrer">
                  {p.title}
                </a>
              ) : (
                p.title
              )}
            </h3>
            <div className="proj-tags">
              {p.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <p>{p.desc}</p>
            {p.href ? (
              <a className="proj-link" href={p.href} target="_blank" rel="noopener noreferrer">
                View on GitHub ↗
              </a>
            ) : (
              <span className="proj-link">{p.meta}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
