import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'
import bgVideo from '../../assets/bg.mp4'

const phrases = [
  "Front-End Developer specializing in building responsive, production-ready web applications.",
  "Skilled in React.js, JavaScript, HTML, and CSS.",
  "Building scalable UI components and integrating REST APIs.",
  "Delivering clean, high-performance interfaces.",
  "6 live projects and counting.",
]

const featured = [
  {
    name: 'Fresh Cart',
    desc: 'Full e-commerce app with auth & REST API.',
    tech: 'React · Context API · REST API',
    url: 'https://fresh-cart-lime-two.vercel.app',
    color: 'card-purple',
  },
  {
    name: 'DANIELS',
    desc: 'Responsive Bootstrap website with structured layouts.',
    tech: 'HTML · CSS · Bootstrap',
    url: 'https://nasserwardany.github.io/DANIELS/',
    color: 'card-teal',
  },
  {
    name: 'Naser',
    desc: 'Website built with Flexbox and CSS Grid.',
    tech: 'HTML · CSS · Flexbox · Grid',
    url: 'https://nasserwardany.github.io/naser/',
    color: 'card-amber',
  },
]

function Hero() {
  const [text, setText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIndex]
    let timeout
    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex(i => i + 1), 40)
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(i => i - 1), 20)
    } else {
      setDeleting(false)
      setPhraseIndex(i => (i + 1) % phrases.length)
    }
    setText(current.substring(0, charIndex))
    return () => clearTimeout(timeout)
  }, [charIndex, deleting, phraseIndex])

  return (
    <section className="hero" id="hero">
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>

      <div className="hero-main">
        <div className="hero-left">
          <span className="hero-tag">FRONTEND DEVELOPER</span>
          <h1 className="hero-name">
            Nasser<br />
            <span className="accent">Wardany.</span>
          </h1>
          <div className="hero-status">
            <span className="dot"></span>
            Available for work
          </div>
          <div className="hero-btns">
            <Link to="/projects" className="btn-primary">View Projects</Link>
            <a href="/Nasser_Wardany_CV_SA.pdf" download className="btn-secondary">Download CV</a>
          </div>
        </div>

        <div className="hero-right">
          <div className="typing-box">
            <span className="typing-label">whoami</span>
            <p className="typing-text">
              {text}<span className="cursor">|</span>
            </p>
          </div>
        </div>
      </div>

      <div className="hero-cards">
        {featured.map((p, i) => (
          <a href={p.url} target="_blank" rel="noreferrer" key={i} className={"hero-card " + p.color}>
            <div className="hero-card-top">
              <span className="hero-card-name">{p.name}</span>
              <span className="hero-card-arrow">↗</span>
            </div>
            <p className="hero-card-desc">{p.desc}</p>
            <span className="hero-card-tech">{p.tech}</span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Hero