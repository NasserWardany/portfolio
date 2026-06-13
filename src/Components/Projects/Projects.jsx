import './Projects.css'

const projects = [
  {
    name: 'Fresh Cart',
    desc: 'Full e-commerce app with auth, cart management and REST API integration.',
    tech: ['React', 'Context API', 'REST API'],
    url: 'https://fresh-cart-lime-two.vercel.app',
    color: 'card-purple',
    badge: 'FEATURED',
  },
  {
    name: 'CRUDS App',
    desc: 'Dynamic CRUD manager with localStorage persistence and real-time updates.',
    tech: ['JavaScript', 'LocalStorage'],
    url: 'https://nasserwardany.github.io/CRUDS/',
    color: 'card-amber',
  },
  {
    name: 'Mealify',
    desc: 'Restaurant website with clean layout and responsive design.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://nasserwardany.github.io/Mealify/',
    color: 'card-coral',
  },
  {
    name: 'Fokir',
    desc: 'Creative portfolio website with smooth sections and modern layout.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://nasserwardany.github.io/Fokir/',
    color: 'card-teal',
  },
  {
    name: 'BookMarker',
    desc: 'Bookmark manager app to save and organize your favorite links.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://nasserwardany.github.io/BookMarker/',
    color: 'card-purple',
  },
  {
    name: 'Family Bakery',
    desc: 'Elegant bakery website with warm design and responsive layout.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://nasserwardany.github.io/Family-Bakery/',
    color: 'card-amber',
  },
  {
    name: 'Web Time',
    desc: 'Bootstrap-based website with structured layout and clean UI.',
    tech: ['HTML', 'CSS', 'Bootstrap'],
    url: 'https://nasserwardany.github.io/web-time/',
    color: 'card-coral',
  },
  {
    name: 'Leon',
    desc: 'Creative agency landing page with minimal and modern design.',
    tech: ['HTML', 'CSS'],
    url: 'https://nasserwardany.github.io/Leon/',
    color: 'card-teal',
  },
  {
    name: 'DANIELS',
    desc: 'Responsive Bootstrap website with structured layouts across all devices.',
    tech: ['HTML', 'CSS', 'Bootstrap'],
    url: 'https://nasserwardany.github.io/DANIELS/',
    color: 'card-purple',
  },
  {
    name: 'Kasper Portfolio',
    desc: 'Portfolio-style site with smooth navigation and cross-device compatibility.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://nasserwardany.github.io/kasper/',
    color: 'card-amber',
  },
  {
    name: 'Defolio',
    desc: 'Responsive portfolio emphasizing UI layout and cross-device compatibility.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://nasserwardany.github.io/Defolio/',
    color: 'card-coral',
  },
  {
    name: 'Naser',
    desc: 'Website built with Flexbox and CSS Grid for precise cross-device UI.',
    tech: ['HTML', 'CSS', 'Flexbox', 'Grid'],
    url: 'https://nasserwardany.github.io/naser/',
    color: 'card-teal',
  },
]

function Projects() {
  return (
    <section className="projects" id="projects">
      <span className="section-label">WORK</span>
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <a href={p.url} target="_blank" rel="noreferrer" key={i} className={"project-card " + p.color}>
            {p.badge ? <span className="project-badge">{p.badge}</span> : null}
            <h3 className="project-name">{p.name}</h3>
            <p className="project-desc">{p.desc}</p>
            <div className="project-tech">
              {p.tech.map((t, j) => (
                <span key={j} className="tech">{t}</span>
              ))}
            </div>
            <span className="project-arrow">↗</span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Projects