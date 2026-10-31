// Services shown in the Services grid, Services page, detail pages and form dropdowns.
// - slug: used in the URL (/services/<slug>)
// - icon: a key from src/components/Icon.jsx
// - technologies: ids from technologies.js
// - relatedProjects: slugs from projects.js
import restaurantHero from '../assets/images/restaurant-hero.webp';
import developersCoding from '../assets/images/developers-coding.webp';
import developerDesk from '../assets/images/developer-desk.webp';
import phoneHand from '../assets/images/phone-hand.webp';
import shopFront from '../assets/images/shop-front.webp';
import hotelLobby from '../assets/images/hotel-lobby.webp';
import clinicTreatment from '../assets/images/clinic-treatment.webp';
import garageMechanic from '../assets/images/garage-mechanic.webp';
import hotelReception from '../assets/images/hotel-reception.webp';
import convenienceStore from '../assets/images/convenience-store.webp';
import developersTeam from '../assets/images/developers-team.webp';

export const services = [
  {
    slug: 'website-development',
    title: 'Website development',
    icon: 'globe',
    short: 'Fast, mobile-friendly websites that explain what you do and turn visitors into enquiries.',
    intro: 'A professional website built around your brand and your customers, easy to update and designed to load quickly on every device.',
    image: developerDesk,
    imageAlt: 'Developer working on a website layout on a large desktop monitor',
    features: [
      { title: 'Custom design', text: 'A unique look built around your brand, not a stock template.' },
      { title: 'Mobile-first build', text: 'Pages that work beautifully on phones, tablets and desktops.' },
      { title: 'Easy content updates', text: 'Edit text, images and pages yourself, or let us do it for you.' },
      { title: 'SEO foundations', text: 'Clean structure, page titles, descriptions and sitemaps from day one.' },
      { title: 'Enquiry forms', text: 'Contact and quote forms that send leads straight to your inbox.' },
      { title: 'Hosting and setup', text: 'Domain, SSL certificate and hosting configured for you.' }
    ],
    benefits: [
      'Look credible and professional from the first visit',
      'Capture more enquiries with clear calls to action',
      'Rank better in local search with solid technical SEO',
      'Keep content fresh without needing a developer'
    ],
    technologies: ['html', 'css', 'javascript', 'react', 'wordpress', 'php'],
    relatedProjects: ['community-rise-charity-website']
  },
  {
    slug: 'web-application-development',
    title: 'Web application development',
    icon: 'window',
    short: 'Secure, browser-based systems that replace spreadsheets and paperwork with one tidy dashboard.',
    intro: 'Custom web applications that automate your day-to-day processes, with secure logins, role-based access and reports your team will actually use.',
    image: developersCoding,
    imageAlt: 'Two developers writing code on monitors in a bright office',
    features: [
      { title: 'Secure user accounts', text: 'Registration, login and role-based permissions for staff and customers.' },
      { title: 'Admin dashboards', text: 'Manage records, approvals and settings from one place.' },
      { title: 'Integrations', text: 'Connect payments, email, SMS and the tools you already use.' },
      { title: 'Reports', text: 'Clear charts and exports to track what matters.' },
      { title: 'Cloud deployment', text: 'Hosted on reliable cloud infrastructure with backups.' },
      { title: 'Scalable design', text: 'Built to grow with new users, branches and features.' }
    ],
    benefits: [
      'Save staff time by automating repetitive tasks',
      'One source of truth instead of scattered spreadsheets',
      'Access your system securely from anywhere',
      'Software that fits your process exactly'
    ],
    technologies: ['react', 'nodejs', 'django', 'php', 'javascript'],
    relatedProjects: ['community-rise-charity-website', 'garage-management-system', 'restaurant-platform']
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile app development',
    icon: 'phone',
    short: 'iOS and Android apps from a single codebase, ready for the App Store and Google Play.',
    intro: 'Cross-platform mobile apps for iOS and Android that put bookings, ordering, loyalty and offers in your customers’ pockets.',
    image: phoneHand,
    imageAlt: 'Person holding a smartphone and tapping the screen',
    features: [
      { title: 'iOS and Android', text: 'One React Native codebase for both platforms keeps costs down.' },
      { title: 'Push notifications', text: 'Send offers, reminders and updates directly to customers.' },
      { title: 'Accounts and loyalty', text: 'Sign-in, profiles, points and rewards built in.' },
      { title: 'Payments', text: 'Secure in-app payments through trusted providers.' },
      { title: 'Store submission', text: 'We handle App Store and Google Play publishing.' },
      { title: 'Admin panel', text: 'Manage app content and users from a web dashboard.' }
    ],
    benefits: [
      'Stay on your customers’ home screens',
      'Encourage repeat visits with rewards and notifications',
      'Reach iOS and Android users without doubling the cost',
      'Own your customer relationship directly'
    ],
    technologies: ['react-native', 'nodejs', 'javascript'],
    relatedProjects: ['hotel-management-system', 'ecommerce-mobile-app']
  },
  {
    slug: 'ecommerce-solutions',
    title: 'E-commerce solutions',
    icon: 'cart',
    short: 'Online shops and shopping apps with product catalogues, secure checkout and order management.',
    intro: 'Online stores and shopping apps that make it easy for customers to browse, pay and come back, with simple tools for managing stock and orders.',
    image: shopFront,
    imageAlt: 'Independent shop front with a bicycle parked on the pavement outside',
    features: [
      { title: 'Product catalogue', text: 'Categories, variants, photos and search.' },
      { title: 'Cart and checkout', text: 'A smooth checkout with secure card payments.' },
      { title: 'Order management', text: 'Track orders from payment to dispatch.' },
      { title: 'Stock control', text: 'Keep inventory accurate across channels.' },
      { title: 'Discounts', text: 'Voucher codes, sales and bundle offers.' },
      { title: 'Customer accounts', text: 'Order history, saved addresses and reorders.' }
    ],
    benefits: [
      'Sell online around the clock',
      'Reduce manual order handling',
      'Keep more margin than marketplace-only selling',
      'Understand what sells with clear reports'
    ],
    technologies: ['react', 'react-native', 'nodejs', 'wordpress', 'php'],
    relatedProjects: ['ecommerce-mobile-app']
  },
  {
    slug: 'restaurant-management-systems',
    title: 'Restaurant management systems',
    icon: 'restaurant',
    short: 'Table booking, digital menus, online ordering, loyalty and an admin dashboard in one platform.',
    intro: 'One platform to take bookings, show your menu, reward loyal customers and run your restaurant, fully customised to the way you work.',
    image: restaurantHero,
    imageAlt: 'Warm restaurant dining room with wooden tables and pendant lights',
    features: [
      { title: 'Online table booking', text: 'Time slots, party sizes and automatic confirmations.' },
      { title: 'Digital and QR menus', text: 'Photos, categories, and dietary and allergen labels.' },
      { title: 'Online ordering', text: 'Collection and delivery with order tracking.' },
      { title: 'Loyalty and rewards', text: 'Points per visit or spend, QR-code points and vouchers.' },
      { title: 'Customer app', text: 'Branded iOS and Android app for bookings and offers.' },
      { title: 'Admin dashboard', text: 'Bookings, menu, orders, customers and staff in one place.' }
    ],
    benefits: [
      'Fewer no-shows with automatic reminders',
      'Less reliance on commission-heavy third parties',
      'More repeat visits through loyalty rewards',
      'Clear reports on bookings and popular dishes'
    ],
    technologies: ['react', 'react-native', 'nodejs'],
    relatedProjects: ['restaurant-platform', 'convenience-store-social-delivery'],
    link: '/restaurant-solutions'
  },
  {
    slug: 'hotel-management-systems',
    title: 'Hotel management systems',
    icon: 'hotel',
    short: 'Room bookings, guest records, a loyalty programme and an admin panel for your team.',
    intro: 'Hotel software that handles direct bookings, rooms and guests, with a loyalty programme that keeps guests coming back.',
    image: hotelLobby,
    imageAlt: 'Modern hotel lobby with designer furniture and wooden wall panels',
    features: [
      { title: 'Direct bookings', text: 'Live room availability and online booking.' },
      { title: 'Room management', text: 'Room types, rates, availability and housekeeping status.' },
      { title: 'Loyalty programme', text: 'QR-code points and rewards for returning guests.' },
      { title: 'Guest records', text: 'Stay history, preferences and contact details in one place.' },
      { title: 'Offers', text: 'Create and publish seasonal deals and packages.' },
      { title: 'Admin panel', text: 'Manage bookings, guests and offers from any device.' }
    ],
    benefits: [
      'Take more direct bookings and pay less commission',
      'Reward and retain repeat guests',
      'Give staff one clear view of the day',
      'Market offers straight to past guests'
    ],
    technologies: ['react-native', 'nodejs', 'react'],
    relatedProjects: ['hotel-management-system']
  },
  {
    slug: 'clinic-management-systems',
    title: 'Healthcare and aesthetic clinic management',
    icon: 'clinic',
    short: 'Online appointments, treatment menus, patient records, consent forms, reminders and payments.',
    intro: 'Clinic software for healthcare and aesthetic practices: online booking, treatment menus, secure patient records and automated reminders.',
    image: clinicTreatment,
    imageAlt: 'Practitioner applying a facial treatment to a client lying on a treatment bed',
    features: [
      { title: 'Online appointment booking', text: 'Clients book treatments and practitioners 24/7.' },
      { title: 'Treatment menu with prices', text: 'Show services, durations and prices clearly.' },
      { title: 'Patient records and consent', text: 'Secure records and digital consent forms.' },
      { title: 'Before and after photos', text: 'Photo records stored securely against each patient.' },
      { title: 'Reminders', text: 'Automatic email and SMS reminders reduce missed appointments.' },
      { title: 'Staff calendars and payments', text: 'Rotas, availability, deposits and payments in one place.' }
    ],
    benefits: [
      'Fewer missed appointments',
      'Paperless consent and records',
      'Less time on the phone, more time with patients',
      'Designed with UK GDPR in mind for sensitive data'
    ],
    technologies: ['react', 'nodejs', 'react-native', 'django'],
    relatedProjects: ['aesthetic-clinic-management-system']
  },
  {
    slug: 'garage-management-systems',
    title: 'Garage management systems',
    icon: 'wrench',
    short: 'Job cards, MOT and service bookings, vehicle records, parts, quotes, invoices and reminders.',
    intro: 'Garage software that keeps every job, vehicle and invoice organised, with automatic MOT and service reminders to bring customers back.',
    image: garageMechanic,
    imageAlt: 'Mechanic working on a car engine with the bonnet open',
    features: [
      { title: 'Digital job cards', text: 'Track every job from check-in to collection.' },
      { title: 'MOT and service bookings', text: 'Online booking with workshop capacity built in.' },
      { title: 'Customer and vehicle records', text: 'Full history for every car and owner.' },
      { title: 'Parts inventory', text: 'Know what is in stock and what to reorder.' },
      { title: 'Quotes and invoices', text: 'Create, send and track quotes and invoices.' },
      { title: 'Service reminders', text: 'Automatic MOT and service due reminders.' }
    ],
    benefits: [
      'No more lost paper job cards',
      'More repeat business from timely reminders',
      'Faster quoting and invoicing',
      'A clear view of workshop workload'
    ],
    technologies: ['react', 'nodejs', 'php'],
    relatedProjects: ['garage-management-system']
  },
  {
    slug: 'booking-and-appointment-systems',
    title: 'Online booking and appointment systems',
    icon: 'calendar',
    short: 'Let customers book online 24/7 with confirmations, reminders and deposits handled for you.',
    intro: 'Booking systems for any appointment-based business, with real-time availability, confirmations, reminders and optional deposits.',
    image: hotelReception,
    imageAlt: 'Marble reception desk in a softly lit hotel lobby',
    features: [
      { title: 'Real-time availability', text: 'Customers only see slots that are genuinely free.' },
      { title: 'Confirmations', text: 'Automatic email and SMS confirmations.' },
      { title: 'Reminders', text: 'Reminder messages that cut no-shows.' },
      { title: 'Deposits and payments', text: 'Take deposits or full payment when booking.' },
      { title: 'Staff and resources', text: 'Book specific staff, rooms or equipment.' },
      { title: 'Calendar sync', text: 'Sync with the calendars your team already uses.' }
    ],
    benefits: [
      'Take bookings while you sleep',
      'Fewer phone calls and double bookings',
      'Reduce no-shows with reminders and deposits',
      'Works on your website and in your app'
    ],
    technologies: ['react', 'nodejs', 'react-native', 'wordpress'],
    relatedProjects: ['restaurant-platform', 'hotel-management-system', 'aesthetic-clinic-management-system']
  },
  {
    slug: 'social-media-and-delivery-management',
    title: 'Social media and delivery platform management',
    icon: 'megaphone',
    short: 'AI-generated promo images, social posts and up-to-date listings on Deliveroo, Uber Eats and Just Eat.',
    intro: 'For local shops and restaurants: we create eye-catching content and keep your delivery platform listings accurate, so you can focus on serving customers.',
    image: convenienceStore,
    imageAlt: 'Shop aisle with well-stocked shelves of groceries and drinks',
    features: [
      { title: 'AI-generated promotional images', text: 'Attractive visuals for offers, new products and seasonal campaigns.' },
      { title: 'Social media posts', text: 'Ready-to-post content written and scheduled for you.' },
      { title: 'Product photos and listings', text: 'Products uploaded with photos and prices on Deliveroo, Uber Eats and Just Eat.' },
      { title: 'Menu and price updates', text: 'Changes made promptly so listings stay accurate.' },
      { title: 'Offers and seasonal promotions', text: 'Campaigns planned around holidays and local events.' },
      { title: 'Content calendars', text: 'A clear monthly plan of what gets posted and when.' }
    ],
    benefits: [
      'Look professional on every platform',
      'Accurate prices and menus mean fewer complaints',
      'Save hours each week on admin',
      'Consistent posting keeps customers engaged'
    ],
    technologies: ['ai-tools'],
    relatedProjects: ['convenience-store-social-delivery']
  },
  {
    slug: 'app-customisation-and-maintenance',
    title: 'App customisation and maintenance',
    icon: 'tools',
    short: 'Updates, fixes, new features and security patches for new or existing websites and apps.',
    intro: 'Keep your website or app secure, fast and up to date, whether we built it or you are looking for a new team to take it over.',
    image: developersTeam,
    imageAlt: 'Development team working together around a table with laptops',
    features: [
      { title: 'Bug fixes', text: 'Quick diagnosis and fixes for issues that affect customers.' },
      { title: 'New features', text: 'Extend your software as your business changes.' },
      { title: 'Security updates', text: 'Keep frameworks, plugins and servers patched.' },
      { title: 'Performance tuning', text: 'Faster load times and smoother apps.' },
      { title: 'Takeovers', text: 'We can review and take over existing codebases.' },
      { title: 'Monitoring and backups', text: 'Uptime checks and regular backups.' }
    ],
    benefits: [
      'Peace of mind that your software is maintained',
      'Predictable monthly costs',
      'A responsive team who knows your system',
      'Keep improving instead of starting again'
    ],
    technologies: ['react', 'react-native', 'nodejs', 'wordpress', 'php', 'django'],
    relatedProjects: ['community-rise-charity-website', 'hotel-management-system']
  }
];

export const getService = (slug) => services.find((s) => s.slug === slug);

// Options for the service dropdown on the quote and contact forms.
export const serviceOptions = [...services.map((s) => s.title), 'Other / not sure yet'];
