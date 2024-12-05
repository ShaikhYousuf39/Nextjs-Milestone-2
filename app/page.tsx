import Image from "next/image"

export default function Home() {
  return (
    <div className="home-page">
      <header>
      <nav>
        <div className="left">Yousuf&apos;s Portfolio</div>
        <div className="right">
          <ul className="navbar">
            <li><a href="/skills">Skills</a></li>
            <li><a href="/education">Education</a></li>
            <li><a href="/projects">Projects</a></li>
          </ul>
        </div>
      </nav>
    </header>
    <main>
      <section className="firstSection">
        <div className="leftSection">
          <span>Hi! I&apos;m</span>
          <span className="purple">Yousuf</span>
          <div>
            <span id="element"></span>
          </div>
          <div className="leftbtn">
            <a target="_blank" href="https://github.com/ShaikhYousuf39">Visit Github</a>
            <a target="_blank" href="Assets/Resume.png">Download Resume</a>
          </div>
        </div>
        <div className="rightSection">
          <Image src="/man.png" width={500} height={500} alt="man" />
        </div>
      </section>
      <section id="contact" className="contactSection">
        <h3 className="contact-heading">Contact Me</h3>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows={5} required></textarea>
          </div>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </section>
    </main>
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <h2>Yousuf&apos;s Portfolio</h2>
        </div>

        <div className="footer-links">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-socials">
          <a
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100058908816483"
            ><i className="fab fa-facebook-f"></i
          ></a>
          <a target="_blank" href="https://www.instagram.com/just_.yousuf"
            ><i className="fab fa-instagram"></i
          ></a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/yousuf-shaikh-691b7b2a3/"
            ><i className="fab fa-linkedin-in"></i
          ></a>
          <a target="_blank" href="https://github.com/ShaikhYousuf39"
            ><i className="fab fa-github"></i
          ></a>
        </div>
      </div>
      

      <div className="footer-bottom">
        <p>&copy; 2024 Yousuf&apos;s Portfolio. All Rights Reserved.</p>
      </div>
    </footer>
    </div>
  );
}
