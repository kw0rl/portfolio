import catalog from '@/public/productcatalog-1.png';
import search from '@/public/productcatalog-2.png';
import detail from '@/public/productcatalog-3.png';

export const productCatalog = {
  title: 'Product Catalog',
  description: 'A Flutter catalog app with paginated browsing, debounced search, and clear loading, empty, and error states.',
  technologies: ['Flutter', 'Dart', 'REST API'],
  github: 'https://github.com/kw0rl/productCatalog',
  apk: 'https://github.com/kw0rl/productCatalog/releases/download/v1.0.0/app-release.apk',
  screenshots: [
    { image: catalog, alt: 'Product Catalog showing a two-column grid of products with names and prices', caption: '01 / Browse the product catalog' },
    { image: search, alt: 'Product Catalog search results for iPhone', caption: '02 / Search across the catalog' },
    { image: detail, alt: 'Product detail showing a watch, its price, rating, description, and gallery indicators', caption: '03 / Explore product details' },
  ],
};
