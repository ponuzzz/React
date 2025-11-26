import React from "react";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap,
  FaGit, FaGithub, FaLightbulb, FaUsers, FaLaptopCode
} from "react-icons/fa";
import "./About.css";

const About = () => {
  // ----------------------
  // Option Toggle: 
  // true => all list items have icons
  // false => all list items use simple dots
  const iconListStyle = true;
  // ----------------------

  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* ----------------- LEFT SIDE ----------------- */}
        <div className="about-left">
          <h2 className="section-heading">About <span>Me</span></h2>
          <p className="about-subtitle">Full-Stack Developer | Problem Solver | Tech Enthusiast</p>

          <p className="about-text">
            I am a MERN Stack Developer with hands-on experience in building modern, responsive, and user-friendly web applications. I enjoy solving complex problems and turning ideas into functional products.
          </p>

          <p className="about-text">
            Currently, I am working at Techolas Technologies, enhancing my skills through real-world projects while focusing on scalable and efficient front-end solutions.
          </p>

          <p className="about-text">
            My passion lies in learning new technologies, improving user experiences, and collaborating with teams to deliver high-quality software. I also enjoy mentoring and helping peers grow in their careers.
          </p>
        </div>

        {/* ----------------- RIGHT SIDE ----------------- */}
        <div className="about-right">
          <div className="skill">My Skills</div>
          <div className="big-skill-box">
           
            {/* Frontend */}
            <div className="small-skill-card">
              <div className="skill-icon"><FaLaptopCode /></div>
              <h4>Frontend Development</h4>
              <ul>
                {iconListStyle ? (
                  <>
                    <li><FaHtml5 className="li-icon" /> HTML5</li>
                    <li><FaCss3Alt className="li-icon" /> CSS3</li>
                    <li><FaJs className="li-icon" /> JavaScript (ES6+)</li>
                    <li><FaReact className="li-icon" /> React.js</li>
                    <li><FaBootstrap className="li-icon" /> Bootstrap</li>
                  </>
                ) : (
                  <>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript (ES6+)</li>
                    <li>React.js</li>
                    <li>Bootstrap</li>
                  </>
                )}
              </ul>
            </div>

            {/* Web Design */}
            <div className="small-skill-card">
              <div className="skill-icon"><FaLightbulb /></div>
              <h4>Web Design</h4>
              <ul>
                {iconListStyle ? (
                  <>
                    <li><FaLightbulb className="li-icon" /> Responsive Layouts</li>
                    <li><FaLightbulb className="li-icon" /> Mobile-First Design</li>
                    <li><FaLightbulb className="li-icon" /> Cross-Browser Compatibility</li>
                    <li><FaLightbulb className="li-icon" /> UI/UX Principles</li>
                  </>
                ) : (
                  <>
                    <li>Responsive Layouts</li>
                    <li>Mobile-First Design</li>
                    <li>Cross-Browser Compatibility</li>
                    <li>UI/UX Principles</li>
                  </>
                )}
              </ul>
            </div>

            {/* Version Control */}
            <div className="small-skill-card">
              <div className="skill-icon"><FaGit /></div>
              <h4>Version Control</h4>
              <ul>
                {iconListStyle ? (
                  <>
                    <li><FaGit className="li-icon" /> Git</li>
                    <li><FaGithub className="li-icon" /> GitHub</li>
                  </>
                ) : (
                  <>
                    <li>Git</li>
                    <li>GitHub</li>
                  </>
                )}
              </ul>
            </div>

            {/* Soft Skills */}
            <div className="small-skill-card">
              <div className="skill-icon"><FaUsers /></div>
              <h4>Soft Skills</h4>
              <ul>
                {iconListStyle ? (
                  <>
                    <li><FaUsers className="li-icon" /> Communication</li>
                    <li><FaUsers className="li-icon" /> Teamwork</li>
                    <li><FaUsers className="li-icon" /> Problem-Solving</li>
                    <li><FaUsers className="li-icon" /> Adaptability</li>
                  </>
                ) : (
                  <>
                    <li>Communication</li>
                    <li>Teamwork</li>
                    <li>Problem-Solving</li>
                    <li>Adaptability</li>
                  </>
                )}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
