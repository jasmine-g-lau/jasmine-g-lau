import "../styles/about.css";

export default function About() {
  return (
    <div className="page">
      <div className="about-links">
        <a className="btn-outline" href="#">Resume</a>
        <a className="btn-outline" href="https://www.linkedin.com/in/jasmine-giching-lau/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a className="btn-outline" href="https://github.com/jasmine-g-lau" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>

      <div className="about-section">
        <p className="about-bio">
          Hello! I’m a software engineer interested in the space where human behavior, data optimization, and intelligent systems meet.
          I graduated from UC Merced with a degree in Computer Science & Engineering and a minor Cognitive Science. During my undergrad, I focused on building full-stack applications and researching distributed deep learning workloads, while also exploring how technology simulates and assists human decision-making.
          This fall, I’m heading to UC Berkeley for my Master of Engineering in Industrial Engineering & Operations Research. I want to combine my software background with systems optimization to solve complex problems in FinTech, specifically focusing on how we can use predictive data and algorithmic design to build smarter, more secure financial tools.
        </p>
        <p className="about-bio">
          Outside of engineering, I make and work on creative projects. I like to work in hands on design, particularly in graphic design, paintings, and creative code.
        </p>
      </div>
    </div>
  );
}