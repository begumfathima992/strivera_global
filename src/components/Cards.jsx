import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';

export function ServiceCard({ service }) {
  return (
    <article className="card-soft service-card">
      <span className="icon-badge"><Icon name={service.icon} /></span>
      <h3>{service.title}</h3>
      <p>{service.short}</p>
      <Link to={`/services/${service.slug}`} className="link-arrow card-link-overlay">
        Learn more<span className="visually-hidden"> about {service.title.toLowerCase()}</span> <Icon name="arrow" />
      </Link>
    </article>
  );
}

export function ProjectCard({ project, headingLevel: H = 'h3' }) {
  const cover = project.images[0];
  return (
    <article className="project-card">
      <div className="thumb">
        <img src={cover.src} alt={cover.alt} loading="lazy" decoding="async" width="1200" height="800" />
      </div>
      <div className="body">
        <span className="tag align-self-start">{project.category}</span>
        <H>{project.title}</H>
        <p>{project.summary}</p>
        <ul className="tech-badges" aria-label="Technologies">
          {project.technologies.map((t) => <li key={t}>{t}</li>)}
        </ul>
        <Link to={`/work/${project.slug}`} className="link-arrow mt-auto card-link-overlay">
          View project<span className="visually-hidden">: {project.title}</span> <Icon name="arrow" />
        </Link>
      </div>
    </article>
  );
}
