const ACHIEVEMENTS = [
  { icon: "★", title: "Smart India Hackathon 2025", desc: "Finalist — national-level tech solution" },
  { icon: "◆", title: "Geek Tank", desc: "3rd Position — startup ideation" },
  { icon: "●", title: "Creative Lead, ISTE", desc: "SRM IST · 2024 – 2026" },
];

export default function About() {
  return (
    <section id="about" className="wrap reveal">
      <div className="sec-tag">About</div>
      <div className="sec-title">About Me</div>
      <p className="about-quote">
        I like problems that sit at the edge of research and something you can actually ship.
      </p>
      <div className="about-body">
        <p>
          I&apos;m a B.Tech Computer Science (Data Science) student at SRM Institute of Science and
          Technology, currently maintaining an 8.5 CGPA. My work spans applied machine learning,
          agentic AI systems, and full-stack product development.
        </p>
        <p>
          As an AI Developer Intern at Infosys Springboard, I built and fine-tuned NLP and LLM
          models for intent classification, automating over 500 user interactions. I later worked
          with IBM SkillsBuild on agentic AI, workflow orchestration, and intelligent automation.
        </p>
        <p>
          My research on a modular robotic cotton-harvesting system was accepted at ISCiNCT 2026,
          and I&apos;ve built ML forecasting models, a full-stack medical delivery platform, and
          dynamic data-driven applications end to end.
        </p>
      </div>

      <div className="ach-grid">
        {ACHIEVEMENTS.map((a) => (
          <div className="ach-card" key={a.title}>
            <div className="ach-icon">{a.icon}</div>
            <div>
              <h4>{a.title}</h4>
              <p>{a.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
