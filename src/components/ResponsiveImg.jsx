// <img> that automatically adds an 800px-wide source for small screens when one exists in
// src/assets/images/sm/ with the same file name (created by `npm run images:fetch`).
const large = import.meta.glob('../assets/images/*.webp', { eager: true, import: 'default' });
const small = import.meta.glob('../assets/images/sm/*.webp', { eager: true, import: 'default' });

const smallFor = Object.fromEntries(
  Object.entries(large)
    .map(([key, url]) => [url, small[key.replace('/images/', '/images/sm/')]])
    .filter(([, sm]) => sm)
);

export default function ResponsiveImg({ src, alt, sizes = '100vw', largeWidth = 1200, ...rest }) {
  const sm = smallFor[src];
  return (
    <img
      src={src}
      alt={alt}
      srcSet={sm ? `${sm} 800w, ${src} ${largeWidth}w` : undefined}
      sizes={sm ? sizes : undefined}
      {...rest}
    />
  );
}
