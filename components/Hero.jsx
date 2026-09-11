const STATS = [
  { num: "2+", label: "Internships" },
  { num: "3", label: "Shipped Projects" },
  { num: "1", label: "Published Paper" },
  { num: "8.5", label: "CGPA" },
];

export default function Hero() {
  return (
    <header className="hero wrap" id="home">
      <div className="hero-top">
        <div>
          <div className="eyebrow">AI / ML ENGINEER · AGENTIC SYSTEMS</div>
          <h1>
            Hi! I&apos;m <span className="accent">Aanya</span>
          </h1>
          <p className="lede">
            I build applied AI systems — from a published autonomous-harvesting robot to production ML
            pipelines, agentic workflows, and full-stack platforms that people actually use.
          </p>

          <div className="hero-cta">
            <a className="btn primary" href="/assets/Aanya_Resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
            <a className="btn" href="#contact">
              Get in touch
            </a>
            <div className="social-row">
              <a href="https://github.com/Aanya987" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://linkedin.com/in/aanya-4476492a1" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="hero-photo">
          <img src="/assets/aanya_new_photo.jpg" alt="Portrait of Aanya" />
        </div>
      </div>

      <div className="stats">
        {STATS.map((s) => (
          <div className="stat" key={s.label}>
            <div className="num">{s.num}</div>
            <div className="label">{s.label}</div>
          </div>
        ))}
      </div>
    </header>
  );
}
