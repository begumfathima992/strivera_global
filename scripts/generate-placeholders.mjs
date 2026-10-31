// Generates 1200x800 WebP placeholders for each project in src/assets/projects/<slug>/
// plus the Open Graph image. Re-run with: npm run images:placeholders
// TODO: replace project placeholders with real screenshots (blur or remove all personal data first).
import sharp from 'sharp';
import { mkdir, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const projects = {
  'hotel-management-system': 'Hotel management system',
  'restaurant-platform': 'Restaurant platform',
  'garage-management-system': 'Garage management system',
  'aesthetic-clinic-management-system': 'Aesthetic clinic management system',
  'community-rise-charity-website': 'Community Rise charity website',
  'convenience-store-social-delivery': 'Convenience store: social & delivery',
  'ecommerce-mobile-app': 'E-commerce mobile app'
};
const views = ['Main screen', 'Feature view', 'Admin view'];

const escape = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

function placeholderSvg(title, view, n) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#0F1E3D"/><stop offset="1" stop-color="#1D3566"/></linearGradient></defs>
  <rect width="1200" height="800" fill="url(#g)"/>
  <rect x="140" y="130" width="920" height="540" rx="24" fill="#ffffff" opacity="0.06" stroke="#ffffff" stroke-opacity="0.18"/>
  <rect x="140" y="130" width="920" height="54" rx="24" fill="#ffffff" opacity="0.08"/>
  <circle cx="180" cy="157" r="8" fill="#F28C28"/><circle cx="206" cy="157" r="8" fill="#ffffff" opacity="0.4"/><circle cx="232" cy="157" r="8" fill="#ffffff" opacity="0.4"/>
  <rect x="190" y="230" width="260" height="380" rx="14" fill="#ffffff" opacity="0.07"/>
  <rect x="480" y="230" width="530" height="170" rx="14" fill="#ffffff" opacity="0.07"/>
  <rect x="480" y="430" width="250" height="180" rx="14" fill="#ffffff" opacity="0.07"/>
  <rect x="760" y="430" width="250" height="180" rx="14" fill="#F28C28" opacity="0.25"/>
  <text x="600" y="330" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="40" font-weight="700" fill="#ffffff">${escape(title)}</text>
  <text x="600" y="380" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="26" fill="#F7B26B">${view} · placeholder ${n}</text>
  <text x="600" y="730" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="22" fill="#ffffff" opacity="0.7">TODO: replace with a real screenshot (personal data removed) · 1200 × 800</text>
</svg>`;
}

for (const [slug, title] of Object.entries(projects)) {
  const dir = path.join(root, 'src/assets/projects', slug);
  await mkdir(dir, { recursive: true });
  for (let i = 0; i < views.length; i++) {
    const file = path.join(dir, `0${i + 1}.webp`);
    // Never overwrite a real screenshot that has already been dropped in.
    if (process.argv.includes('--force') === false) {
      try { await access(file); continue; } catch { /* not there yet */ }
    }
    await sharp(Buffer.from(placeholderSvg(title, views[i], i + 1))).webp({ quality: 70 }).toFile(file);
  }
  console.log(`placeholders ready: ${slug}`);
}

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#0F1E3D"/>
  <rect x="80" y="250" width="90" height="8" rx="4" fill="#F28C28"/>
  <text x="80" y="220" font-family="Helvetica, Arial, sans-serif" font-size="78" font-weight="800" fill="#ffffff">Strivera Global</text>
  <text x="80" y="320" font-family="Helvetica, Arial, sans-serif" font-size="38" fill="#ffffff">Custom software, built to fit your business.</text>
  <text x="80" y="540" font-family="Helvetica, Arial, sans-serif" font-size="28" fill="#F7B26B">Websites · Web apps · Mobile apps · UK</text>
</svg>`;
await sharp(Buffer.from(og)).jpeg({ quality: 82 }).toFile(path.join(root, 'public/og-image.jpg'));
console.log('public/og-image.jpg ready');
