// Central icon map. Data files refer to icons by these keys.
// All icons are generic (Bootstrap Icons / Material Design, open source). No company logos.
import {
  BsGlobe2, BsWindowStack, BsPhone, BsCart3, BsBuilding, BsHeartPulse, BsWrenchAdjustable,
  BsCalendarCheck, BsMegaphone, BsTools, BsPeople, BsSliders, BsPiggyBank, BsLifePreserver,
  BsReceipt, BsKey, BsSearch, BsPalette, BsCodeSlash, BsCheck2Circle, BsRocketTakeoff, BsAward,
  BsEye, BsFiletypeHtml, BsFiletypeCss, BsFiletypeJs, BsFiletypePhp, BsGrid3X3Gap, BsPencilSquare,
  BsHdd, BsDatabase, BsSignpostSplit, BsCloud, BsMagic, BsBag, BsHeart, BsShop, BsJournalText,
  BsBagCheck, BsGift, BsSpeedometer2, BsTruck, BsBarChart, BsStar, BsDiagram3, BsCheck2,
  BsArrowRight, BsTelephone, BsEnvelope, BsGeoAlt, BsClock, BsChatDots, BsQrCode, BsBoxArrowUpRight,
  BsXLg, BsChevronLeft, BsChevronRight, BsShieldCheck, BsLink45Deg, BsCpu
} from 'react-icons/bs';
import { MdOutlineRestaurant, MdOutlineHotel } from 'react-icons/md';

const map = {
  globe: BsGlobe2, window: BsWindowStack, phone: BsPhone, cart: BsCart3, building: BsBuilding,
  clinic: BsHeartPulse, wrench: BsWrenchAdjustable, calendar: BsCalendarCheck, megaphone: BsMegaphone,
  tools: BsTools, people: BsPeople, sliders: BsSliders, piggy: BsPiggyBank, lifebuoy: BsLifePreserver,
  receipt: BsReceipt, key: BsKey, search: BsSearch, palette: BsPalette, code: BsCodeSlash,
  check: BsCheck2Circle, tick: BsCheck2, rocket: BsRocketTakeoff, award: BsAward, eye: BsEye,
  html: BsFiletypeHtml, css: BsFiletypeCss, js: BsFiletypeJs, php: BsFiletypePhp, atom: BsCpu,
  grid: BsGrid3X3Gap, pencil: BsPencilSquare, server: BsHdd, database: BsDatabase, route: BsSignpostSplit,
  cloud: BsCloud, magic: BsMagic, bag: BsBag, heart: BsHeart, shop: BsShop, menu: BsJournalText,
  bagCheck: BsBagCheck, gift: BsGift, dashboard: BsSpeedometer2, truck: BsTruck, chart: BsBarChart,
  star: BsStar, branches: BsDiagram3, arrow: BsArrowRight, tel: BsTelephone, email: BsEnvelope,
  pin: BsGeoAlt, clock: BsClock, chat: BsChatDots, qr: BsQrCode, external: BsBoxArrowUpRight,
  close: BsXLg, prev: BsChevronLeft, next: BsChevronRight, shield: BsShieldCheck, link: BsLink45Deg,
  restaurant: MdOutlineRestaurant, hotel: MdOutlineHotel
};

export default function Icon({ name, size = '1em', className, title }) {
  const Cmp = map[name] ?? BsCheck2Circle;
  return title ? (
    <Cmp size={size} className={className} role="img" aria-label={title} focusable="false" />
  ) : (
    <Cmp size={size} className={className} aria-hidden="true" focusable="false" />
  );
}
