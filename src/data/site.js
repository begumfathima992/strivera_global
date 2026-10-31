// Company-wide details used across the site. Edit here; components read from this file.
// Every value marked TODO must be replaced before launch.

export const company = {
  name: 'Strivera Global',
  tagline: 'Custom software, built to fit your business.',
  // TODO: replace with the live domain (also update public/robots.txt and public/sitemap.xml).
  url: 'https://www.striveraglobal.co.uk',
  email: 'hello@striveraglobal.co.uk', // TODO: confirm company inbox
  phone: '+44 (0)20 0000 0000', // TODO: real phone number
  phoneHref: '+442000000000', // TODO: same number, digits only, for tel: links
  whatsapp: '442000000000', // TODO: WhatsApp number in international format, digits only
  companyNumber: 'TODO', // TODO: Companies House registration number
  registeredIn: 'England and Wales', // TODO: confirm
  address: {
    street: 'TODO Street Address', // TODO
    locality: 'London', // TODO
    postcode: 'TODO', // TODO
    country: 'United Kingdom'
  },
  hours: 'Monday to Friday, 9am to 6pm', // TODO: confirm opening hours
  founder: 'Ravi [SURNAME – TODO]', // TODO: founder's full name
  social: [
    // TODO: replace with real profile URLs, or remove any you don't use.
    { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/' },
    { label: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/' },
    { label: 'Facebook', icon: 'facebook', href: 'https://www.facebook.com/' }
  ]
};

export const pricingClaim = 'up to 25% below typical UK agency rates';
export const pricingFootnote =
  'Based on our comparison of published rates from UK software agencies. Final pricing depends on project scope.';

export const navLinks = [
  { to: '/services', label: 'Services' },
  { to: '/restaurant-solutions', label: 'Restaurants' },
  { to: '/work', label: 'Our Work' },
  { to: '/industries', label: 'Industries' },
  { to: '/technologies', label: 'Technologies' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' }
];

export const trustPoints = [
  { icon: 'people', text: 'Experienced developers' },
  { icon: 'sliders', text: 'Fully customised to your requirements' },
  { icon: 'piggy', text: 'Up to 25% below typical agency rates' },
  { icon: 'lifebuoy', text: 'Ongoing support and maintenance' }
];

export const whyChooseUs = [
  { icon: 'people', title: 'Experienced developers', text: 'Your project is built by an in-house team that has delivered booking systems, mobile apps and full-stack platforms.' },
  { icon: 'sliders', title: 'Customised to you', text: 'We shape the software around how your business actually works, not the other way round.' },
  { icon: 'piggy', title: 'Up to 25% below typical UK agency rates', text: 'A lean team and efficient process mean you pay for development, not overheads.', footnote: true },
  { icon: 'receipt', title: 'Transparent fixed quotes', text: 'A clear, itemised quote agreed before work starts, so there are no surprise invoices.' },
  { icon: 'lifebuoy', title: 'Post-launch support', text: 'Updates, fixes and improvements after go-live, on a plan that suits your budget.' },
  { icon: 'key', title: 'You own your code', text: 'Once the project is paid for, the source code and accounts are yours.' }
];

export const processSteps = [
  { title: 'Discover', icon: 'search', text: 'We learn how your business runs, who your customers are and what the software must do.' },
  { title: 'Design', icon: 'palette', text: 'Wireframes and visual designs you can click through and comment on before we build.' },
  { title: 'Develop', icon: 'code', text: 'We build in short cycles and share progress regularly so you always know where things stand.' },
  { title: 'Test', icon: 'check', text: 'Checks on phones, tablets and desktops, plus accessibility, speed and security reviews.' },
  { title: 'Launch', icon: 'rocket', text: 'We deploy, set up domains and hosting, and walk your team through the new system.' },
  { title: 'Support', icon: 'lifebuoy', text: 'Monitoring, updates and new features as your business grows.' }
];

export const budgetRanges = [
  'Under £2,000',
  '£2,000 – £5,000',
  '£5,000 – £10,000',
  '£10,000 – £25,000',
  '£25,000+',
  'Not sure yet'
];

export const values = [
  { icon: 'award', title: 'Quality', text: 'Clean, tested code and interfaces that are easy for your customers and staff to use.' },
  { icon: 'eye', title: 'Transparency', text: 'Fixed quotes, honest timelines and regular progress updates.' },
  { icon: 'piggy', title: 'Affordability', text: 'Professional software at rates small and growing businesses can plan for.' },
  { icon: 'lifebuoy', title: 'Long-term support', text: 'We stay with you after launch, keeping your software secure and up to date.' }
];
