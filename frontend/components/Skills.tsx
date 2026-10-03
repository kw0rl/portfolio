import { ChevronDown } from 'lucide-react';
const groups = [
  { title: 'Interfaces', items: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Flutter'] },
  { title: 'Backend & data', items: ['Node.js', 'Express.js', 'PHP', 'Laravel', 'MySQL'] },
  { title: 'Development tools', items: ['Git', 'GitHub', 'Postman', 'Vite', 'WordPress'] },
];
const additional = [
  { title: 'Other languages', items: ['C++', 'Java', 'Python'] },
  { title: 'API integrations', items: ['REST APIs', 'Google Cloud Vision API', 'Spotify API', 'Mailtrap API'] },
  { title: 'AI-assisted tools', items: ['Cursor', 'Codex'] },
];
function Rows({ items }: { items: typeof groups }) { return <dl className="toolkit-rows">{items.map(group => <div key={group.title}><dt>{group.title}</dt><dd><ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul></dd></div>)}</dl>; }
export default function Skills() {
  return <section className="about-toolkit" aria-labelledby="toolkit-heading"><div className="about-section-label"><span className="eyebrow">The toolkit</span><h2 id="toolkit-heading">What I work with.</h2></div><div><Rows items={groups} /><details className="skills-more"><summary>More tools &amp; languages <ChevronDown size={18} aria-hidden="true" /></summary><Rows items={additional} /></details></div></section>;
}
