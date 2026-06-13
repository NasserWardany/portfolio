import { useEffect, useRef, useState } from 'react'
import {
  FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaBootstrap
} from 'react-icons/fa'
import {
  SiJavascript, SiTailwindcss, SiVite
} from 'react-icons/si'
import { TbApi } from 'react-icons/tb'
import './Skills.css'

const skills = [
  { name: 'React.js',         icon: <FaReact />,       color: '#61DAFB' },
  { name: 'JavaScript',       icon: <SiJavascript />,  color: '#F5C400' },
  { name: 'HTML5',            icon: <FaHtml5 />,       color: '#E44D26' },
  { name: 'CSS3',             icon: <FaCss3Alt />,     color: '#264DE4' },
  { name: 'Tailwind CSS',     icon: <SiTailwindcss />, color: '#38BDF8' },
  { name: 'Bootstrap',        icon: <FaBootstrap />,   color: '#7952B3' },
  { name: 'Git',              icon: <FaGitAlt />,      color: '#F05032' },
  { name: 'GitHub',           icon: <FaGithub />,      color: '#ffffff' },
  { name: 'REST APIs',        icon: <TbApi />,         color: '#1D9E75' },
  { name: 'Vite',             icon: <SiVite />,        color: '#AFA9EC' },
]

function SkillCard({ skill, index }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={"skill-card " + (visible ? 'visible' : '')}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <span className="skill-icon" style={{ color: skill.color }}>
        {skill.icon}
      </span>
      <span className="skill-name">{skill.name}</span>
      <span className="skill-glow" style={{ background: skill.color }}></span>
    </div>
  )
}

function Skills() {
  return (
    <section className="skills" id="skills">
      <span className="section-label">TECH STACK</span>
      <h2 className="section-title">Skills & Tools</h2>
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <SkillCard key={i} skill={skill} index={i} />
        ))}
      </div>
    </section>
  )
}

export default Skills