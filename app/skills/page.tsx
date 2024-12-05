export default function About() {
  return (
    <div>
      <section id="skills" className="secondSection">
        <div className="skills">
          <h2 className="skills-heading">My Skills</h2>

          <div className="skill">
            <p>HTML</p>
            <div className="progress">
              <div className="progress-bar" data-skill="90">
                90%
              </div>
            </div>
          </div>

          <div className="skill">
            <p>CSS</p>
            <div className="progress">
              <div className="progress-bar" data-skill="80">
                80%
              </div>
            </div>
          </div>

          <div className="skill">
            <p>JavaScript</p>
            <div className="progress">
              <div className="progress-bar" data-skill="60">
                60%
              </div>
            </div>
          </div>

          <div className="skill">
            <p>Adobe Illustrator</p>
            <div className="progress">
              <div className="progress-bar" data-skill="85">
                85%
              </div>
            </div>
          </div>

          <div className="skill">
            <p>Adobe Photoshop</p>
            <div className="progress">
              <div className="progress-bar" data-skill="80">
                80%
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
