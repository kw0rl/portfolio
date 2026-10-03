'use client';
import { useState } from 'react';
import { ChevronDown, Code2, Braces, PanelsTopLeft, Paintbrush, Smartphone, Database, Terminal, GitBranch, Layers } from 'lucide-react';
import ProjectImage from '@/components/ProjectImage';
import { productCatalog } from '@/lib/product-catalog';
const features = [
  ['Browse', 'A little discovery goes a long way.', 'Explore products in a two-column catalog. Pages of 20 load as you scroll, keeping the next discovery close.'],
  ['Search', 'Find your thing.', 'Search across the API catalog, with a 400 ms debounce and protection against outdated responses.'],
  ['Product details', 'Get the full picture.', 'Open a product to explore its description, price, rating, and swipeable image gallery.'],
];
export function CatalogWalkthrough() {
  const [active, setActive] = useState(0);
  const shot = productCatalog.screenshots[active];
  return <section className="catalog-lab" aria-labelledby="walkthrough-title"><div className="lab-copy"><p className="eyebrow">01 / Explore the interface</p><h2 id="walkthrough-title">Three screens.<br />One simple flow.</h2><div className="feature-switch" aria-label="App screen selection">{features.map((feature, i) => <button key={feature[0]} aria-pressed={active === i} onClick={() => setActive(i)}><span>0{i + 1}</span>{feature[0]}<span>↗</span></button>)}</div><div className="feature-note" aria-live="polite"><h3>{features[active][1]}</h3><p>{features[active][2]}</p></div><p className="preview-disclaimer">Screenshot walkthrough · not a live app</p></div><div className="phone-stage"><span className="stage-label">FLUTTER / ANDROID</span><ProjectImage key={active} src={shot.image.src} width={shot.image.width} height={shot.image.height} alt={shot.alt} caption={shot.caption} portrait /></div></section>;
}
export function RanacoShowcase() {
  const [active, setActive] = useState(0);
  return <section className="browser-lab" aria-label="Explore Ranaco screenshots"><div className="browser-lab-bar"><span>RANACO / A CLOSER LOOK</span><div>{['Introduction', 'Programmes'].map((label, i) => <button key={label} aria-pressed={i === active} onClick={() => setActive(i)}>{label}</button>)}</div></div><ProjectImage key={active} src={`/ranacolandingpage.reti.edu.my_ (${active + 1}).webp`} alt={active === 0 ? 'Ranaco programme introduction with enrollment actions' : 'Ranaco diploma programme listing with maritime course cards'} caption={active === 0 ? '01 / Programme introduction and enrollment actions' : '02 / Diploma programmes and maritime course cards'} /><p className="preview-disclaimer">Actual website screenshots · select an image to enlarge</p></section>;
}
const tools = { Web: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS'], Mobile: ['Flutter', 'Dart', 'REST APIs'], 'Backend & data': ['Node.js', 'Express.js', 'PHP', 'Laravel', 'MySQL'], Tools: ['Git', 'GitHub', 'Postman', 'Vite', 'WordPress'] };
const toolIcons = [Code2, PanelsTopLeft, ChevronDown, Code2, Braces, Paintbrush];
const categoryIcons = { Mobile: [Smartphone, Code2, Layers], 'Backend & data': [Terminal, Layers, ChevronDown, Code2, Braces, Database], Tools: [GitBranch, Code2, Terminal, Layers, PanelsTopLeft] };
export function MakerToolbox() {
  const [category, setCategory] = useState<keyof typeof tools>('Web');
  return <section className="maker-toolbox" aria-labelledby="toolbox-title"><p className="eyebrow">My working kit</p><h2 id="toolbox-title">Different tools.<br />Same curiosity.</h2><div className="toolbox-buttons" aria-label="Technology categories">{(Object.keys(tools) as (keyof typeof tools)[]).map(key => <button key={key} aria-pressed={key === category} onClick={() => setCategory(key)}>{key}</button>)}</div><ul className="toolbox-items" aria-live="polite">{tools[category].map((tool, i) => { const Icon = (category === 'Web' ? toolIcons : categoryIcons[category])[i]; return <li key={tool}><span>0{i + 1}</span>{tool}<Icon className="tool-row-icon" size={24} strokeWidth={1.5} aria-hidden="true" /></li>; })}</ul><details className="skills-more"><summary>More tools &amp; languages <ChevronDown size={18} aria-hidden="true" /></summary><p>Other languages: C++, Java, Python.</p><p>API integrations: Google Cloud Vision, Spotify, Mailtrap.</p><p>AI-assisted tools: Cursor, Codex.</p></details></section>;
}
