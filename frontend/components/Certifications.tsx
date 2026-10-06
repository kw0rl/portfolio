import './Certifications.css';
import Image from 'next/image';
import { ArrowUpRight, FileText } from 'lucide-react';
import { certifications } from '@/lib/certifications';

export default function Certifications() {
  return (
    <section className="maker-certifications" aria-labelledby="certifications-heading">
      <p className="eyebrow">Learning &amp; Certifications</p>
      <h2 id="certifications-heading">Always learning.<br />Still building.</h2>
      <div className="certificate-list">
        {certifications.map((certificate) => (
          <article className="certificate-card" key={certificate.id}>
            <a className="certificate-preview" href={certificate.pdf} target="_blank" rel="noopener noreferrer" aria-label={`Open ${certificate.title} certificate (PDF, new tab)`}>
              <Image src={certificate.image} alt={`IBM course certificate awarded to Muhammad Azrul Mustaqqim bin Mohd Ridzuan for ${certificate.title}`} width={1162} height={898} sizes="(max-width: 767px) 90vw, 40vw" />
              <span>View certificate <ArrowUpRight size={18} aria-hidden="true" /></span>
            </a>
            <div className="certificate-details">
              <p className="eyebrow">Course Certificate</p>
              <h3>{certificate.title}</h3>
              <p className="certificate-issuer">{certificate.issuer} <span>· Offered through {certificate.platform}</span></p>
              <p className="certificate-date">Completed <time dateTime={certificate.completedAt}>{certificate.completedLabel}</time></p>
              <div className="button-row">
                <a className="button button-dark" href={certificate.verificationUrl} target="_blank" rel="noopener noreferrer" aria-label="Verify credential on Coursera (new tab)">Verify credential <ArrowUpRight size={17} aria-hidden="true" /></a>
                <a className="text-link" href={certificate.pdf} target="_blank" rel="noopener noreferrer" aria-label="Open certificate PDF (new tab)">Open PDF <FileText size={17} aria-hidden="true" /></a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
