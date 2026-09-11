export default function Navbar() {
  return (
    <nav>
      <div className="nav-inner">
        <div className="nav-logo">
          AANYA<span>.</span>
        </div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certificates</a>
          <a className="resume-btn" href="/assets/Aanya_Resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
