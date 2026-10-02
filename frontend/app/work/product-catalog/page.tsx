import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Download } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectImage from '@/components/ProjectImage';
import { productCatalog } from '@/lib/product-catalog';

export const metadata: Metadata = {
  title: 'Product Catalog — Selected work', description: productCatalog.description,
  alternates: { canonical: '/work/product-catalog' },
  openGraph: { title: 'Product Catalog — Azrul Mustaqqim', description: productCatalog.description, url: '/work/product-catalog', images: ['/opengraph-image'] },
};

export default function ProductCatalogPage() {
  return <><Navbar /><main id="main-content" className="case-main page-shell">
    <Link className="text-link case-back" href="/#works"><ArrowLeft size={16} aria-hidden="true" /> Back to selected work</Link>
    <header className="case-header"><p className="eyebrow">Selected work / Flutter technical assessment</p><h1>Product<br /><em>Catalog.</em></h1><p className="case-description">{productCatalog.description}</p><div className="button-row"><a className="button button-dark" href={productCatalog.github} target="_blank" rel="noopener noreferrer">View on GitHub <ArrowUpRight size={17} aria-hidden="true" /></a><a className="button button-outline" href={productCatalog.apk}>Download APK <Download size={17} aria-hidden="true" /></a></div><b><p className="catalog-download-note">Android · v1.0.0 · 49.9 MB. Requires an internet connection; product data comes from DummyJSON.</p></b></header>
    <dl className="project-facts"><div><dt>Project type</dt><dd>Mobile developer technical assessment</dd></div><div><dt>Focus</dt><dd>Browsing, search, and request states</dd></div><div><dt>Built with</dt><dd>{productCatalog.technologies.join(' · ')}</dd></div></dl>
    <div className="catalog-gallery" aria-label="Product Catalog screenshots">{productCatalog.screenshots.map(({ image, alt, caption }) => <ProjectImage key={caption} src={image.src} width={image.width} height={image.height} alt={alt} caption={caption} portrait />)}</div>
    <section className="case-content"><p className="eyebrow">The approach</p><div><h2>A small app.<br /><em>Considered states.</em></h2><p>Built as a technical assessment, this app lets users browse sample products from DummyJSON, search the catalog, and open a product’s description, price, rating, and image gallery.</p><h3>Search beyond the first page</h3><p>Search uses the API rather than filtering only the products already loaded. A 400 ms debounce limits requests while typing, and a request version check prevents older responses from replacing the current results.</p><h3>Keep browsing through interruptions</h3><p>Products load in pages of 20 as the user scrolls. If an additional page fails, existing products stay visible with a retry action. Loading, empty, error, and success states give each request a clear outcome.</p><h3>Small details that support the flow</h3><p>Pull-to-refresh reloads the active search. Images have loading placeholders and error fallbacks, while the detail screen includes a swipeable gallery with page indicators.</p><h3>Separate data from the interface</h3><p>A product model handles JSON conversion and a service handles HTTP requests. The UI uses Flutter’s built-in state management, with StatefulWidget and setState for the catalog and FutureBuilder for product details.</p></div></section>
    <section className="case-content catalog-validation"><p className="eyebrow">Validation & scope</p><div><h2>Clear about<br /><em>what’s covered.</em></h2><p>The repository includes one model unit test checking integer-to-double conversion for price and rating, plus preservation of the product title. It does not provide automated coverage for API requests or widget behavior.</p><p>The project README records manual Android checks for browsing, search, retry, detail navigation, and refresh. This is an assessment app using sample data, without checkout or payment features.</p><p>The README also documents AI assistance used during development, including guidance, review, and selected code edits.</p><a className="text-link" href={`${productCatalog.github}#validation`} target="_blank" rel="noopener noreferrer">Read the project documentation <ArrowUpRight size={16} aria-hidden="true" /></a></div></section>
    <section className="case-next"><p className="eyebrow">More selected work</p><h2>From mobile<br /><em>to the web.</em></h2><Link className="button button-outline" href="/work/ranaco">Explore Ranaco <ArrowUpRight size={17} aria-hidden="true" /></Link></section>
  </main><Footer /></>;
}
