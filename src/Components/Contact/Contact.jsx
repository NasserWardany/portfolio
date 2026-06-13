import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa'
import './Contact.css'

function Contact() {
  return (
    <section className="contact" id="contact">
      <span className="section-label">CONTACT</span>
      <h2 className="section-title">Let's work together</h2>

      <div className="contact-grid">
        <div className="contact-left">
          <p className="contact-desc">
            Open for freelance projects and full-time opportunities.
            Have a project in mind? Let's talk.
          </p>
          <a href="mailto:naserwardany1@gmail.com" className="contact-email">
            <FaEnvelope />
            naserwardany1@gmail.com
          </a>
          <div className="contact-socials">
            <a href="https://github.com/NasserWardany" target="_blank" rel="noreferrer" className="social-btn github">
              <FaGithub />
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/nasserwardany" target="_blank" rel="noreferrer" className="social-btn linkedin">
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
            <a href="https://wa.me/966547022558" target="_blank" rel="noreferrer" className="social-btn whatsapp">
              <FaWhatsapp />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="contact-right">
          <a href="mailto:naserwardany1@gmail.com" className="contact-cta">
            <span className="cta-label">START A PROJECT</span>
            <span className="cta-arrow">↗</span>
          </a>
          <a href="/Nasser_Wardany_CV.pdf" download className="contact-cv">
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact