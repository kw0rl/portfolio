import { Braces, ChevronDown, CodeXml, Database, Layers, Plug, Sparkles, Wrench } from 'lucide-react';

const mainSkills = [
  { title: 'Frontend', icon: Layers, description: 'The building blocks for responsive websites and thoughtful app interfaces.', items: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Flutter'] },
  { title: 'Backend & Data', icon: Database, description: 'Tools for application logic, server-side features, and structured data.', items: ['Node.js', 'Express.js', 'PHP', 'Laravel', 'MySQL'] },
  { title: 'Development Tools', icon: Wrench, description: 'Supporting the workflow, from version control to testing and publishing.', items: ['Git', 'GitHub', 'Postman', 'Vite', 'WordPress'] },
];
const additionalSkills = [
  { title: 'Other Languages', icon: CodeXml, items: ['C++', 'Java', 'Python'] },
  { title: 'API Integrations', icon: Plug, items: ['REST APIs', 'Google Cloud Vision API', 'Spotify API', 'Mailtrap API'] },
  { title: 'AI-assisted Tools', icon: Sparkles, items: ['Cursor', 'Codex'] },
];

function SkillLabels({ items }: { items: string[] }) {
  return <ul className="skill-labels">{items.map(item => <li key={item}>{item}</li>)}</ul>;
}

export default function Skills() {
  return <section className="skills-section" aria-labelledby="skills-heading">
    <div className="skills-heading"><div><p className="eyebrow">My toolkit</p><h3 id="skills-heading">The tools behind<br /><em>the work.</em></h3></div><p>From the interface to the supporting pieces, a toolkit for bringing ideas to the web.</p></div>
    <div className="skills-grid">
      {mainSkills.map(({ title, icon: Icon, description, items }, index) => <article className={`skill-card${index === 0 ? ' skill-card-featured' : ''}`} key={title}>
        <div className="skill-card-top"><span className="skill-icon"><Icon size={23} strokeWidth={1.5} aria-hidden="true" /></span><span className="skill-number" aria-hidden="true">0{index + 1}</span></div>
        <div className="skill-card-copy"><h4>{title}</h4><p>{description}</p></div>
        <SkillLabels items={items} />
        {index === 0 && <div className="skill-card-footnote"><Braces size={17} aria-hidden="true" /><span>Structure. Style. Interaction.</span></div>}
      </article>)}
    </div>
    <details className="skills-more">
      <summary><span>More tools &amp; languages</span><ChevronDown className="skills-chevron" size={19} aria-hidden="true" /></summary>
      <div className="skills-additional">{additionalSkills.map(({ title, icon: Icon, items }) => <div className="skill-group" key={title}><h4><Icon size={18} strokeWidth={1.5} aria-hidden="true" />{title}</h4><SkillLabels items={items} /></div>)}</div>
    </details>
  </section>;
}
