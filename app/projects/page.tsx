import Image from "next/image";

export default function Projects() {
  return (
    <div>
      <section id="projects" className="projectsSection">
        <h3 className="project-heading">My Projects</h3>
        <div className="projects">
          <div className="project-item">
            <Image
              src="/project1.png"
              width={800}
              height={400}
              alt="Project 1 Image 1"
              className="project-image"
            />
            <div className="project-title">Food Delivery Website</div>
            <div className="project-description">
              <p>
                This is my Food Delivery Website Made In Nextjs With Tailwind CSS.
              </p>
            </div>
          </div>
          <div className="project-item">
            <Image
              src="/project2.png"
              width={800}
              height={400}
              alt="Project 1 Image 1"
              className="project-image"
            />
            <div className="project-title">Todo List</div>
            <div className="project-description">
              <p>
                This is my TodoList website Made Using Html, CSS & Javascript
              </p>
            </div>
          </div>
          <div className="project-item">
            <Image
              src="/project3.png"
              width={800}
              height={400}
              alt="Project 1 Image 1"
              className="project-image"
            />
            <div className="project-title">Resume Maker</div>
            <div className="project-description">
              <p>
                This is my Dynamic Resume Maker Made Using Html, CSS & Javascript
              </p>
            </div>
          </div>
          <div className="project-item">
            <Image
              src="/project5.png"
              width={800}
              height={400}
              alt="Project 1 Image 1"
              className="project-image"
            />
            <div className="project-title">Temperature Convertor</div>
            <div className="project-description">
              <p>
                This is My Temperature Converter App.
              </p>
            </div>
          </div>
          <div className="project-item">
            <Image
              src="/project6.png"
              width={800}
              height={400}
              alt="Project 1 Image 1"
              className="project-image"
            />
            <div className="project-title">Sorting Hat</div>
            <div className="project-description">
              <p>
               This is my fun website where your house is chosing by your name length.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
