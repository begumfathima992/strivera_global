# Strivera Global website

Marketing website for **Strivera Global**: *Custom software, built to fit your business.*

- **Frontend:** React 18 + Vite, React Router, react-bootstrap (Bootstrap 5), one global stylesheet (`src/styles/global.css`) with brand colours as CSS variables.
- **Backend:** Node.js + Express in `/server`. Handles the quote and contact forms and sends email with Nodemailer.
- **Content:** no CMS. All editable content lives in `src/data/*.js`.

```
.
├── index.html                 Fonts, base meta tags
├── public/                    favicon, og-image.jpg, robots.txt + sitemap.xml (both generated)
├── src/
│   ├── data/                  ← edit content here
│   │   ├── site.js            company details, nav, pricing wording, process, values, budgets
│   │   ├── services.js        11 services (grid, Services page, detail pages, form dropdown)
│   │   ├── projects.js        portfolio (/work and /work/<slug>)
│   │   ├── faqs.js            FAQ accordion
│   │   ├── technologies.js    technology grid and Technologies page
│   │   ├── industries.js      industries grid and Industries page
│   │   └── restaurant.js      Restaurant Solutions modules and steps
│   ├── assets/images/         stock photos (WebP) + sm/ 800px copies
│   ├── assets/projects/<slug>/ project screenshots (currently placeholders)
│   ├── components/            layout, sections, forms, gallery, icons
│   ├── pages/                 one file per page
│   └── styles/global.css
├── server/                    Express API for forms (separate package.json)
├── scripts/                   image download, placeholder and sitemap generators
├── deploy/                    Nginx site and systemd unit examples
└── CREDITS.md                 photo credits
```

## 1. Setup

Requires Node.js 18 or newer (developed on Node 24).

```bash
# Frontend
npm install
npm run dev            # http://localhost:5173

# Backend (second terminal)
cd server
npm install
cp .env.example .env   # then edit .env (see below)
npm run dev            # http://127.0.0.1:5001
```

In development, Vite forwards `/api/*` to the Express server (see `vite.config.js`).
If both `RESEND_API_KEY` and `SMTP_HOST` are left empty and `NODE_ENV` is not `production`, the server **logs emails to the console instead of sending them**, so you can test the forms without credentials.

For local development set these in `server/.env`:

```
NODE_ENV=development
SITE_ORIGIN=http://localhost:5173
```

### Useful scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Regenerate `sitemap.xml`/`robots.txt`, then build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run images:fetch` | Re-download stock photos listed in `scripts/image-manifest.mjs` and rewrite `CREDITS.md` |
| `npm run images:placeholders` | Create missing 1200×800 project placeholders and `public/og-image.jpg` (never overwrites existing project images unless `--force`) |
| `npm run sitemap` | Regenerate `public/sitemap.xml` and `public/robots.txt` only |

## 2. Environment variables

Real values go in `server/.env`, which is git-ignored. `server/.env.example` contains placeholders only.

| Variable | Example | Purpose |
| --- | --- | --- |
| `NODE_ENV` | `production` | In production, missing mail settings cause an error instead of console logging |
| `PORT` | `5001` | Port the API listens on (localhost only) |
| `SITE_ORIGIN` | `https://www.striveraglobal.co.uk,https://striveraglobal.co.uk` | Comma-separated origins allowed by CORS |
| `TRUST_PROXY` | `1` | Proxies in front of the app (1 behind Nginx), so rate limiting sees real IPs |
| `RATE_LIMIT_MAX` | `5` | Form submissions allowed per IP per 15 minutes |
| `RESEND_API_KEY` | `re_…` | [Resend](https://resend.com) API key. When set, emails go through Resend's HTTPS API and all `SMTP_*` variables are optional and ignored. Recommended on Render, whose free instances block outbound SMTP ports. The `MAIL_FROM` domain must be verified in Resend |
| `SMTP_HOST` / `SMTP_PORT` / `SMTP_SECURE` | `smtp.office365.com` / `587` / `false` | Only used when `RESEND_API_KEY` is empty. Your mail provider's SMTP server (`SMTP_SECURE=true` for port 465) |
| `SMTP_USER` / `SMTP_PASS` | | Only used when `RESEND_API_KEY` is empty. SMTP login (use an app password where your provider offers one) |
| `MAIL_FROM` | `"Strivera Global <info@striveraglobal.co.uk>"` | Sender address. It must be allowed by your provider (SPF/DKIM) |
| `MAIL_TO` | `info@striveraglobal.co.uk` | Company inbox that receives enquiries |

Optional frontend variable (root `.env`, see `.env.example`): `VITE_API_URL`. Leave it empty when Nginx serves the site and the API on the same domain.

### What the API does

`POST /api/quote` and `POST /api/contact`:

1. Validate the body with zod (`server/src/validation.js`; mirrors `src/lib/formSchema.js`).
2. If the hidden honeypot field `website` is filled in, return success without sending anything.
3. Email the enquiry to `MAIL_TO` (reply-to set to the customer), then send a confirmation email to the customer. If only the confirmation fails, the error is logged and the visitor still sees success, because the enquiry was delivered. At startup the server logs which transport is active (`resend-api`, `smtp` or `console`).

Protection: `helmet`, CORS restricted to `SITE_ORIGIN`, `express-rate-limit`, 20 KB JSON body limit, honeypot, and HTML-escaping of user input in emails.

## 3. Editing content

All content lives in `src/data/`. Edit the file, save, and the dev server reloads. Components don't need changing.

- **Company details** (email, phone, WhatsApp, address, company number, founder, social links, domain): `src/data/site.js`. These feed the header, footer, contact page, JSON-LD schema, sitemap and robots.txt.
- **Pricing wording:** `pricingClaim` and `pricingFootnote` in `site.js`. Always say *"up to 25% below typical UK agency rates"* and keep the footnote.
- **Services:** `src/data/services.js`. `slug` becomes `/services/<slug>`. `icon` is a key from `src/components/Icon.jsx`, `technologies` are ids from `technologies.js`, and `relatedProjects` are slugs from `projects.js`. The service dropdown on both forms is built from this list.
- **FAQs:** `src/data/faqs.js`, as `{ question, answer }`.
- **Technologies:** `src/data/technologies.js`. `home: true` shows the item on the Home page grid.
- **Industries:** `src/data/industries.js`.
- **Restaurant modules and steps:** `src/data/restaurant.js`.
- **Icons:** generic icons only (Bootstrap Icons / Material, open source). To add one, import it in `src/components/Icon.jsx` and add a key to the `map`. Do not add third-party company logos.

### Adding a new project

1. Choose a slug, such as `dental-booking-app`, and create `src/assets/projects/dental-booking-app/`.
2. Add screenshots as WebP, ideally 1200×800 (`01.webp`, `02.webp`, …). **Blur or remove customer names, phone numbers, emails and any other personal data first.** You can run `npm run images:placeholders` after adding the slug to that script to create placeholders.
3. In `src/data/projects.js`, import the images at the top:
   ```js
   import dental1 from '../assets/projects/dental-booking-app/01.webp';
   import dental2 from '../assets/projects/dental-booking-app/02.webp';
   ```
4. Add an object to the `projects` array:
   ```js
   {
     slug: 'dental-booking-app',
     title: 'Dental booking app',
     category: 'Healthcare',            // must be one of projectCategories
     summary: 'One-line summary for the card.',
     challenge: 'What problem the client had.',
     solution: 'What we built.',
     features: ['Online booking', 'Reminders'],
     technologies: ['React Native', 'Node.js'],
     images: [
       { src: dental1, alt: 'Describe what the screenshot shows' },
       { src: dental2, alt: '…' }
     ],
     liveUrl: 'https://example.com',    // optional
     featured: false                    // true = also shown on the Home page
   }
   ```
5. To add a new category, add it to `projectCategories` (it appears in the `/work` filter automatically).
6. Run `npm run build`. The sitemap picks up the new `/work/<slug>` page automatically.

Content rules: do not add invented client names, results, statistics, testimonials, years in business or awards. Use only genuine, approved information.

### Replacing stock photos

Edit `scripts/image-manifest.mjs` (Unsplash photo id, page URL and photographer), then run `npm run images:fetch`. This downloads WebP files plus 800px copies and regenerates `CREDITS.md`. Avoid photos showing other companies' logos or branding.

## 4. Deployment (AWS EC2 + Nginx)

Below is an example for Ubuntu 22.04/24.04 on EC2. Open ports 80 and 443 in the security group.

```bash
# 1. Install Node.js LTS, Nginx and Certbot
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs nginx certbot python3-certbot-nginx

# 2. Get the code
sudo mkdir -p /var/www/strivera && sudo chown $USER /var/www/strivera
git clone <your-repo-url> /var/www/strivera
cd /var/www/strivera

# 3. Build the frontend
npm ci
npm run build                     # outputs dist/

# 4. Set up the API
cd server
npm ci --omit=dev
cp .env.example .env && nano .env # real SMTP credentials, SITE_ORIGIN=https://yourdomain
chmod 600 .env

# 5. Run the API as a service
sudo cp ../deploy/strivera-api.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable --now strivera-api
curl http://127.0.0.1:5001/api/health   # {"ok":true}

# 6. Nginx: serve dist/ and proxy /api to the API
sudo cp ../deploy/nginx.conf /etc/nginx/sites-available/strivera
sudo nano /etc/nginx/sites-available/strivera   # set server_name
sudo ln -s /etc/nginx/sites-available/strivera /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t && sudo systemctl reload nginx

# 7. HTTPS
sudo certbot --nginx -d yourdomain.co.uk -d www.yourdomain.co.uk
```

**To update the site later:** `git pull && npm ci && npm run build`. For server changes, also run `cd server && npm ci --omit=dev && sudo systemctl restart strivera-api`.

Notes:

- The API listens on `127.0.0.1` only, so it is reachable only through Nginx.
- Nginx's `try_files … /index.html` lets React Router handle deep links such as `/work/restaurant-platform`.
- Set up SPF, DKIM and DMARC for the sending domain so confirmation emails don't land in spam.

## 5. Quality checks done

Tested on the production build at 390px (mobile) and 1440px (desktop) on every route: all 11 main pages, 11 service detail pages, 7 project pages and the 404.

- No console errors, no horizontal scrolling, one `<h1>` per page, unique titles and descriptions, alt text on every image, labels on every input.
- `/work` filters (all 6 categories), the gallery lightbox (arrow keys, Esc), the mobile menu, the cookie banner, the skip link, and focus moving to the page on navigation.
- Both forms: validation errors, successful submission and the confirmation message. API checks covered invalid input (400), honeypot, wrong origin (403), oversized body (413) and rate limit (429).
- Lighthouse (mobile, simulated throttling): Accessibility, Best Practices and SEO scored 100 on all 29 content pages. Performance scored 92–97 on the pages tested. Scores vary between runs and depend on hosting. The 404 page is intentionally `noindex`.

## 6. Before launch: what to fill in

See the **"Manual TODO list"** section below. You can also search the code for `TODO`.

### Manual TODO list

**Company details** (`src/data/site.js`)
- [ ] Live domain (`url`). This also updates canonical URLs, Open Graph URLs, `sitemap.xml` and `robots.txt` on the next build.
- [ ] Company email inbox, phone number (display and `tel:` formats) and WhatsApp number
- [ ] Registered address and postcode, company number, and registration country if not England and Wales
- [ ] Opening hours
- [ ] Social media profile URLs (or remove unused ones)
- [ ] Domain in `deploy/nginx.conf`

**Founder and About page**
- [ ] Ravi's surname (`company.founder` in `site.js`)
- [ ] Founder photo and short bio (placeholder block in `src/pages/About.jsx`)

**Portfolio** (`src/data/projects.js`)
- [ ] Real screenshots for all 7 projects in `src/assets/projects/<slug>/` (21 placeholder files). **Blur or remove all personal data.**
- [ ] Technologies for the restaurant platform, garage system and clinic system (currently "TODO: confirm technologies")
- [ ] Further brief detail in each project's `challenge` text (marked TODO)
- [ ] Confirm Community Rise is happy to be named and linked

**Email and server** (`server/.env`)
- [ ] SMTP host, port, username and password
- [ ] `MAIL_FROM` (an allowed sender) and `MAIL_TO` (the inbox for enquiries)
- [ ] `SITE_ORIGIN` set to the live domain(s)
- [ ] SPF, DKIM and DMARC DNS records for the sending domain

**Legal**
- [ ] Complete the Privacy Policy (`src/pages/PrivacyPolicy.jsx`): last-updated date, company number, address, ICO registration number, lawful bases, processors, international transfers, retention and security
- [ ] Complete the Cookie Policy (`src/pages/CookiePolicy.jsx`): date. Decide whether to self-host fonts (Google Fonts receives visitor IPs).
- [ ] Have both policies reviewed by a qualified adviser
- [ ] If analytics are added later, load them only after "Accept all" (`src/components/CookieBanner.jsx`)

**Content**
- [ ] Testimonials: replace the placeholder blocks on `/restaurant-solutions` and `/work` with genuine, approved testimonials, or remove them (`SocialProofPlaceholder` in `src/components/Sections.jsx`)
- [ ] Optional: add "from" prices on the Pricing page (`src/pages/Pricing.jsx`)
- [ ] Keep evidence of the agency rate comparison behind "up to 25% below typical UK agency rates"
- [ ] Optional: replace `public/og-image.jpg` and `public/favicon.svg` with final brand assets
