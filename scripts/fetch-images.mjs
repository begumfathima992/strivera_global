// Downloads the photos listed in image-manifest.mjs as compressed WebP and rewrites CREDITS.md.
// Usage: npm run images:fetch
import { writeFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { images } from './image-manifest.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'src/assets/images');
const smDir = path.join(outDir, 'sm');
await mkdir(smDir, { recursive: true });

for (const img of images) {
  const url = `https://images.unsplash.com/photo-${img.id}?w=${img.width ?? 1200}&q=45&fm=webp&fit=max`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${img.file}: HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(path.join(outDir, img.file), buf);
  // 800px-wide copy for phones, picked up automatically by src/components/ResponsiveImg.jsx
  const sm = await fetch(`https://images.unsplash.com/photo-${img.id}?w=800&q=45&fm=webp&fit=max`);
  if (!sm.ok) throw new Error(`${img.file} (sm): HTTP ${sm.status}`);
  const smBuf = Buffer.from(await sm.arrayBuffer());
  await writeFile(path.join(smDir, img.file), smBuf);
  console.log(`${img.file.padEnd(28)} ${(buf.length / 1024).toFixed(0)} KB  (sm ${(smBuf.length / 1024).toFixed(0)} KB)`);
}

const rows = images
  .map((i) => `| \`src/assets/images/${i.file}\` | ${i.subject} | ${i.photographer} | [Unsplash](${i.page}) |`)
  .join('\n');

await writeFile(
  path.join(root, 'CREDITS.md'),
  `# Image credits

All photographs below are free photos from [Unsplash](https://unsplash.com), used under the
[Unsplash License](https://unsplash.com/license) (free for commercial use; attribution appreciated
but not required). They were downloaded as compressed WebP via \`npm run images:fetch\`, which
regenerates this file from \`scripts/image-manifest.mjs\`. Each photo also has an
800px-wide copy with the same file name in \`src/assets/images/sm/\` for small screens.

| File | Subject | Photographer | Source |
| --- | --- | --- | --- |
${rows}

## Other images

- \`src/assets/projects/<slug>/*.webp\` are generated placeholders (\`npm run images:placeholders\`).
  **TODO:** replace with real project screenshots. Blur or remove customer names, phone numbers,
  emails and any other personal data before adding them.
- \`public/og-image.jpg\` and \`public/favicon.svg\` were created for Strivera Global.
- No third-party company logos (including Deliveroo, Uber Eats or Just Eat) are used anywhere on the site.
- Icons come from the open-source Bootstrap Icons set (MIT licence) via \`react-icons\`.
`
);
console.log('CREDITS.md written');
