// Industries shown on the Home page and Industries page.
// - services: slugs from services.js; projectCategory: a category from projects.js (optional)
import restaurantDining from '../assets/images/restaurant-dining.webp';
import hotelReception from '../assets/images/hotel-reception.webp';
import clinicTreatment from '../assets/images/clinic-treatment.webp';
import garageInspection from '../assets/images/garage-inspection.webp';
import shopFront from '../assets/images/shop-front.webp';
import convenienceStore from '../assets/images/convenience-store.webp';
import communityVolunteers from '../assets/images/community-volunteers.webp';

export const industries = [
  {
    slug: 'restaurants-and-cafes',
    name: 'Restaurants and cafés',
    icon: 'restaurant',
    image: restaurantDining,
    imageAlt: 'Busy restaurant dining room with diners and staff among green plants',
    text: 'Table booking, digital and QR menus, online ordering, loyalty schemes and delivery platform management.',
    services: ['restaurant-management-systems', 'social-media-and-delivery-management', 'mobile-app-development'],
    link: '/restaurant-solutions'
  },
  {
    slug: 'hotels-and-hospitality',
    name: 'Hotels and hospitality',
    icon: 'hotel',
    image: hotelReception,
    imageAlt: 'Hotel reception desk in black marble with warm lighting',
    text: 'Direct room booking, guest records, loyalty programmes and admin panels for your team.',
    services: ['hotel-management-systems', 'booking-and-appointment-systems', 'mobile-app-development']
  },
  {
    slug: 'healthcare-and-aesthetic-clinics',
    name: 'Healthcare and aesthetic clinics',
    icon: 'clinic',
    image: clinicTreatment,
    imageAlt: 'Client receiving a facial treatment in a clinic',
    text: 'Online appointments, treatment menus, patient records, consent forms, reminders and payments.',
    services: ['clinic-management-systems', 'booking-and-appointment-systems']
  },
  {
    slug: 'garages-and-automotive',
    name: 'Garages and automotive',
    icon: 'wrench',
    image: garageInspection,
    imageAlt: 'Mechanic inspecting a car engine in a workshop',
    text: 'Job cards, MOT and service bookings, vehicle records, parts, invoicing and reminders.',
    services: ['garage-management-systems', 'booking-and-appointment-systems']
  },
  {
    slug: 'retail',
    name: 'Retail',
    icon: 'shop',
    image: shopFront,
    imageAlt: 'Independent shop front with lamps in the window',
    text: 'Online shops, shopping apps, stock control and customer loyalty for independent retailers.',
    services: ['ecommerce-solutions', 'website-development', 'mobile-app-development']
  },
  {
    slug: 'convenience-stores-and-delivery',
    name: 'Convenience stores and delivery',
    icon: 'bag',
    image: convenienceStore,
    imageAlt: 'Convenience store aisle stocked with snacks and drinks',
    text: 'Product listings and prices on Deliveroo, Uber Eats and Just Eat, plus AI-generated promotional content.',
    services: ['social-media-and-delivery-management', 'ecommerce-solutions']
  },
  {
    slug: 'charities-and-community',
    name: 'Charities and community organisations',
    icon: 'heart',
    image: communityVolunteers,
    imageAlt: 'Volunteers packing food parcels for a community project',
    text: 'Accessible websites, member registration, event sign-ups and contact forms on a sensible budget.',
    services: ['website-development', 'web-application-development']
  }
];
