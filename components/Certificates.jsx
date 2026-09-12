import CertMarquee from "./CertMarquee";

export const CERTS = [
  {
    img: "/assets/certs/adobe_hackathon.png",
    title: "Adobe India Hackathon",
    issuer: "Adobe · via Unstop — Round 1: Online MCQ Assessment + Coding",
    cardTitle: "Adobe India Hackathon",
    cardIssuer: "Adobe · Round 1 Participation",
  },
  {
    img: "/assets/certs/genai_simplilearn.png",
    title: "Generative AI for Beginners",
    issuer: "Simplilearn SkillUp — Completed 26 April 2025",
    cardTitle: "Generative AI for Beginners",
    cardIssuer: "Simplilearn SkillUp",
  },
  {
    img: "/assets/certs/nep_saarthi.png",
    title: "Quiz Programme on NEP 2020",
    issuer: "SRM IST — NEP Saarthi, Directorate of Learning & Development",
    cardTitle: "NEP Saarthi 2025",
    cardIssuer: "SRM Institute of Science & Technology",
  },
  {
    img: "/assets/certs/deloitte_data_analytics.png",
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte Australia · via Forage — Completed 1 July 2025",
    cardTitle: "Data Analytics Job Simulation",
    cardIssuer: "Deloitte Australia",
  },
  {
    img: "/assets/certs/sap_erp.png",
    title: "Introduction to ERP using GBI 3.30 on SAP S/4HANA",
    issuer: "SAP University Alliances, SRM IST",
    cardTitle: "ERP using SAP S/4HANA",
    cardIssuer: "SAP University Alliances",
  },
  {
    img: "/assets/certs/infosys_internship6.png",
    title: "Internship 6.0 — Athlete Market Value Prediction Engine",
    issuer: "Infosys Springboard — Nov 2025 to Jan 2026",
    cardTitle: "AI Developer Internship",
    cardIssuer: "Infosys Springboard",
  },
];

export default function Certificates({ onSelect }) {
  return (
    <section id="certificates" className="wrap reveal">
      <div className="sec-tag">Recognition</div>
      <div className="sec-title">Certificates &amp; Achievements</div>
      <CertMarquee onSelect={onSelect} />
    </section>
  );
}
