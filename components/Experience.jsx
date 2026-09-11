const JOBS = [
  {
    when: "Nov 2025 — Jan 2026",
    title: "AI Developer Intern",
    org: "Infosys Springboard · Remote",
    bullets: [
      "Built and deployed an AI-based transfer/query application using Python, TensorFlow, and PyTorch, automating 500+ user interactions.",
      "Fine-tuned NLP and LLM models for intent classification across multi-turn dialogue using Hugging Face and prompt engineering.",
    ],
  },
  {
    when: "Jun 2026 — Jul 2026",
    title: "AI Automation & Intelligent Solutions Intern",
    org: "IBM SkillsBuild — AICTE & BharatCares · Virtual",
    bullets: [
      "Gained hands-on expertise in agentic AI, workflow orchestration, and intelligent automation through project-based masterclasses.",
      "Integrated AI models, REST APIs, and digital tools to build automated, intelligent end-to-end solutions.",
    ],
  },
];

const EDUCATION = [
  {
    title: "B.Tech, Computer Science & Engineering (Data Science)",
    sub: "SRM Institute of Science and Technology — CGPA 8.5",
    when: "2023 — 2027",
  },
  {
    title: "Senior Secondary Education, CBSE",
    sub: "Guru Harkrishan Public School, Delhi — 71.2%",
    when: "2022 — 2023",
  },
  {
    title: "Secondary Education, CBSE",
    sub: "Victor Public School, Delhi — 85.6%",
    when: "2020 — 2021",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="wrap reveal">
      <div className="sec-tag">Experience</div>
      <div className="sec-title">Work Experience</div>
      <div className="tl">
        {JOBS.map((job) => (
          <div className="tl-item" key={job.title}>
            <div className="tl-when">{job.when}</div>
            <h3>{job.title}</h3>
            <div className="tl-org">{job.org}</div>
            <ul>
              {job.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="sec-tag" style={{ marginTop: "56px" }}>
        Education
      </div>
      <div className="edu-grid" style={{ marginTop: "16px" }}>
        {EDUCATION.map((edu) => (
          <div className="edu-card" key={edu.title}>
            <div>
              <h4>{edu.title}</h4>
              <div className="sub">{edu.sub}</div>
            </div>
            <div className="when">{edu.when}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
