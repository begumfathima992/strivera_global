import { Link } from 'react-router-dom';

export default function BrandMark({ onClick }) {
  return (
    <Link to="/" className="brand navbar-brand" onClick={onClick} aria-label="Strivera Global home">
      <svg className="brand-mark" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
        <rect width="64" height="64" rx="14" fill="#0F1E3D" />
        <path d="M42 20c-3-3-7-4-11-4-7 0-12 4-12 10 0 12 25 7 25 18 0 4-4 7-10 7-5 0-9-2-12-5" fill="none" stroke="#F28C28" strokeWidth="6" strokeLinecap="round" />
      </svg>
      <span>
        Strivera <span>Global</span>
      </span>
    </Link>
  );
}
