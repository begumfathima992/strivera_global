// Portfolio projects shown on /work and /work/<slug>.
//
// Fields: { slug, title, category, summary, challenge, solution, features[], technologies[], images[], liveUrl?, featured }
// - category must be one of `projectCategories` below (used by the /work filters).
// - technologies are free text labels shown as badges.
// - images are { src, alt } objects. The first image is the card and hero image.
//
// TODO: the images below are generated 1200x800 placeholders. Replace each file in
// src/assets/projects/<slug>/ with a real screenshot of the same name. Before adding any real
// screenshot, blur or remove customer names, phone numbers, emails and all other personal data.
//
// Content rule: no client names, results, statistics or testimonials unless supplied and approved.
import hotel1 from '../assets/projects/hotel-management-system/01.webp';
import hotel2 from '../assets/projects/hotel-management-system/02.webp';
import hotel3 from '../assets/projects/hotel-management-system/03.webp';
import restaurant1 from '../assets/projects/restaurant-platform/01.webp';
import restaurant2 from '../assets/projects/restaurant-platform/02.webp';
import restaurant3 from '../assets/projects/restaurant-platform/03.webp';
import garage1 from '../assets/projects/garage-management-system/01.webp';
import garage2 from '../assets/projects/garage-management-system/02.webp';
import garage3 from '../assets/projects/garage-management-system/03.webp';
import clinic1 from '../assets/projects/aesthetic-clinic-management-system/01.webp';
import clinic2 from '../assets/projects/aesthetic-clinic-management-system/02.webp';
import clinic3 from '../assets/projects/aesthetic-clinic-management-system/03.webp';
import charity1 from '../assets/projects/community-rise-charity-website/01.webp';
import charity2 from '../assets/projects/community-rise-charity-website/02.webp';
import charity3 from '../assets/projects/community-rise-charity-website/03.webp';
import store1 from '../assets/projects/convenience-store-social-delivery/01.webp';
import store2 from '../assets/projects/convenience-store-social-delivery/02.webp';
import store3 from '../assets/projects/convenience-store-social-delivery/03.webp';
import shop1 from '../assets/projects/ecommerce-mobile-app/01.webp';
import shop2 from '../assets/projects/ecommerce-mobile-app/02.webp';
import shop3 from '../assets/projects/ecommerce-mobile-app/03.webp';

export const projectCategories = ['Hospitality', 'Healthcare', 'Automotive', 'Retail and Delivery', 'Charity', 'E-commerce'];

export const projects = [
  {
    slug: 'hotel-management-system',
    title: 'Hotel management system',
    category: 'Hospitality',
    summary: 'Room booking, a QR-code loyalty programme and an admin panel for bookings, guests and offers.',
    challenge:
      'The hotel needed a straightforward way for guests to book rooms directly and a reason for them to come back, while staff needed one place to manage bookings, guests and promotions. TODO: add any further detail about the client’s situation (without naming them unless approved).',
    solution:
      'We built a mobile app for guests and an admin panel for the hotel team. Guests can browse rooms, book stays and collect loyalty points by scanning QR codes, while staff manage bookings, guest records and offers from a single dashboard.',
    features: ['Room browsing and booking', 'Loyalty programme with QR-code points', 'Rewards and offers for returning guests', 'Admin panel for bookings', 'Guest records management', 'Offer creation and publishing'],
    technologies: ['React Native', 'Node.js'],
    images: [
      { src: hotel1, alt: 'Hotel management system main screen (placeholder screenshot)' },
      { src: hotel2, alt: 'Hotel loyalty programme screen (placeholder screenshot)' },
      { src: hotel3, alt: 'Hotel admin panel bookings view (placeholder screenshot)' }
    ],
    featured: true
  },
  {
    slug: 'restaurant-platform',
    title: 'Restaurant platform',
    category: 'Hospitality',
    summary: 'Online table booking, a digital menu, loyalty and rewards, and an admin dashboard in one platform.',
    challenge:
      'The restaurant wanted to take bookings online, present its menu clearly and reward regular diners without juggling several disconnected tools. TODO: add further detail about the brief.',
    solution:
      'We delivered a single platform combining online table booking, a digital menu, a loyalty and rewards scheme and an admin dashboard where the team manages bookings, menu items and customer rewards.',
    features: ['Online table booking', 'Digital menu with categories', 'Loyalty points and rewards', 'Admin dashboard for bookings and menu', 'Customer management'],
    technologies: ['TODO: confirm technologies'],
    images: [
      { src: restaurant1, alt: 'Restaurant platform booking screen (placeholder screenshot)' },
      { src: restaurant2, alt: 'Restaurant digital menu screen (placeholder screenshot)' },
      { src: restaurant3, alt: 'Restaurant admin dashboard (placeholder screenshot)' }
    ],
    featured: true
  },
  {
    slug: 'garage-management-system',
    title: 'Garage management system',
    category: 'Automotive',
    summary: 'Job cards, service bookings, customer and vehicle records, and invoicing for a busy workshop.',
    challenge:
      'Paper job cards and separate spreadsheets made it hard to track work in progress, vehicle history and outstanding invoices. TODO: add further detail about the brief.',
    solution:
      'We built a web-based system where staff create digital job cards, take service bookings, keep full customer and vehicle records and raise invoices from completed jobs.',
    features: ['Digital job cards', 'Service bookings', 'Customer records', 'Vehicle records and history', 'Invoice generation'],
    technologies: ['TODO: confirm technologies'],
    images: [
      { src: garage1, alt: 'Garage management job cards screen (placeholder screenshot)' },
      { src: garage2, alt: 'Garage vehicle records screen (placeholder screenshot)' },
      { src: garage3, alt: 'Garage invoicing screen (placeholder screenshot)' }
    ],
    featured: false
  },
  {
    slug: 'aesthetic-clinic-management-system',
    title: 'Aesthetic clinic management system',
    category: 'Healthcare',
    summary: 'Appointments, a treatment menu, patient records and reminders for an aesthetic clinic.',
    challenge:
      'The clinic needed clients to book treatments online, staff to keep patient records organised and secure, and fewer missed appointments. TODO: add further detail about the brief.',
    solution:
      'We created a clinic management system with online appointment booking, a treatment menu, secure patient records and automated appointment reminders.',
    features: ['Online appointment booking', 'Treatment menu', 'Patient records', 'Automated reminders'],
    technologies: ['TODO: confirm technologies'],
    images: [
      { src: clinic1, alt: 'Clinic appointment booking screen (placeholder screenshot)' },
      { src: clinic2, alt: 'Clinic treatment menu screen (placeholder screenshot)' },
      { src: clinic3, alt: 'Clinic patient records screen (placeholder screenshot)' }
    ],
    featured: true
  },
  {
    slug: 'community-rise-charity-website',
    title: 'Community Rise charity website',
    category: 'Charity',
    summary: 'A website for a Newham community charity with secure member registration, login and a contact form.',
    challenge:
      'Community Rise, a community charity in Newham, needed a clear website to share its work, a secure way for members to register and log in, and a simple way for people to get in touch. TODO: add further detail about the brief.',
    solution:
      'We designed and built a full-stack website with secure member registration and login and a contact form, backed by a PostgreSQL database and deployed on AWS EC2 behind Nginx.',
    features: ['Secure member registration', 'Member login', 'Contact form', 'Responsive design', 'AWS EC2 deployment with Nginx'],
    technologies: ['React', 'Vite', 'Node.js', 'Express', 'PostgreSQL', 'Sequelize', 'AWS EC2', 'Nginx'],
    images: [
      { src: charity1, alt: 'Community Rise website home page (placeholder screenshot)' },
      { src: charity2, alt: 'Community Rise member registration form (placeholder screenshot)' },
      { src: charity3, alt: 'Community Rise contact page (placeholder screenshot)' }
    ],
    liveUrl: 'https://communityrise.org.uk',
    featured: true
  },
  {
    slug: 'convenience-store-social-delivery',
    title: 'Local convenience store: social media and delivery management',
    category: 'Retail and Delivery',
    summary: 'AI-generated promotional images, delivery platform listings with prices, and regular menu and price updates.',
    challenge:
      'A local convenience store wanted to sell more through delivery platforms and social media but had no time to photograph products, write listings or keep prices up to date. TODO: add further detail about the brief.',
    solution:
      'We produced AI-generated product and promotional images, uploaded product listings with prices to Deliveroo and Uber Eats, and now keep menus and prices up to date on a regular schedule.',
    features: ['AI-generated product images', 'AI-generated promotional images', 'Product listings with prices on Deliveroo and Uber Eats', 'Regular menu and price updates'],
    technologies: ['AI image generation tools', 'Deliveroo partner portal', 'Uber Eats partner portal'],
    images: [
      { src: store1, alt: 'Convenience store promotional image set (placeholder)' },
      { src: store2, alt: 'Convenience store delivery product listings (placeholder)' },
      { src: store3, alt: 'Convenience store price update workflow (placeholder)' }
    ],
    featured: true
  },
  {
    slug: 'ecommerce-mobile-app',
    title: 'E-commerce mobile app',
    category: 'E-commerce',
    summary: 'A shopping app with product catalogue, cart, checkout and order management.',
    challenge: 'The business wanted a mobile shopping experience that let customers browse and buy easily. TODO: add further detail about the brief.',
    solution:
      'We built a cross-platform mobile app with a product catalogue, cart and checkout, plus order management for the business, powered by a Node.js back end.',
    features: ['Product catalogue', 'Shopping cart', 'Checkout', 'Order management'],
    technologies: ['React Native', 'Node.js'],
    images: [
      { src: shop1, alt: 'E-commerce app product catalogue (placeholder screenshot)' },
      { src: shop2, alt: 'E-commerce app cart and checkout (placeholder screenshot)' },
      { src: shop3, alt: 'E-commerce app order management (placeholder screenshot)' }
    ],
    featured: false
  }
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);
