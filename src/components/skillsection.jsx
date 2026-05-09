import "./skills.css";

export default function Skills() {
  return (
    <div className="skills-container">
      <h1 className="title">Skills</h1>

      <section className="skill-section">
        <h2>Programming & Web Development</h2>
        <p><strong>Languages:</strong> Python (4-Star on HackerRank), TypeScript, JavaScript.</p>
        <p><strong>Frontend:</strong> React.js, Responsive UI/UX Design.</p>
        <p><strong>Full-Stack:</strong> Application architecture and API integration.</p>
      </section>

      <section className="skill-section">
        <h2>Engineering & IoT</h2>
        <p><strong>Hardware:</strong> ESP8266 Microcontroller, Sensor Integration, Motor Drivers.</p>
        <p><strong>Systems:</strong> Wireless Control Systems, IoT Prototyping.</p>
      </section>

      <section className="skill-section">
        <h2>Automation & Tools</h2>
        <p><strong>Low-Code:</strong> Workflow automation using n8n.</p>
        <p><strong>DevOps:</strong> Git, GitHub, and automation pipelines.</p>
      </section>
    </div>
  );
}