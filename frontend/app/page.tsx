import Playground from '@/components/Playground';
import { profile } from '@/lib/content';
export default function Home() { return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Person', name: profile.name, url: profile.url, jobTitle: 'Web & Flutter Developer', sameAs: [profile.github, profile.linkedin] }) }} /><Playground /></>; }
