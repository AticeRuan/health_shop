import hero1 from '../assets/hero1.jpg'
import hero2 from '../assets/hero2.jpg'
import hero3 from '../assets/hero3.jpg'
import hero4 from '../assets/hero4.jpg'
import hero5 from '../assets/hero5.jpg'
import hero6 from '../assets/hero6.jpg'

// export const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
export const carouselItems = [
  {
    imgUrl: hero1,
    alt: 'massage',
    title: 'Reflexology',
    desc: 'Revitalize Your Sole, Unwind Your Whole: Reflexology Full Body Massage, Where Relaxation Meets Rejuvenation',
    buttonText: 'Enquiry NOW',
    href: '/contact',
  },
  {
    imgUrl: hero2,
    alt: 'traditional remedy',
    title: 'Huangdi Neijing spirituality',
    desc: 'Inner Canon of the Yellow Emperor: Embracing the Wisdom of Huangdi Neijing',
    buttonText: 'Learn More',
    id: 'block1',
    href: '/#block1',
  },
  {
    imgUrl: hero3,
    alt: 'traditional remedy',
    title: 'Herbal remeday',
    desc: 'Natural Cure, Rooted in Tradition: Harnessing Wellness with Chinese Herbal Harmony',
    buttonText: 'Learn More',
    id: 'block2',
    href: '/#block2',
  },
  {
    imgUrl: hero4,
    alt: 'maniicure',
    title: 'Manicure and Pedicure',
    desc: 'Pamper Your Hands and Feet: Precision Care, Immaculate Style.',
    buttonText: 'Enquiry NOW',
    href: '/contact',
  },
  {
    imgUrl: hero5,
    alt: 'facial',
    title: 'Facial Relaxation',
    desc: 'Revitalize Your Radiance: Unveil the Beauty Within.',
    buttonText: 'Enquiry NOW',
    href: '/contact',
  },
  {
    imgUrl: hero6,
    alt: 'massage',
    title: 'More services avaiable',
    desc: 'Targeted massage,precision waxing solutions,precision brow sculpting and tinting and more...',
    buttonText: 'See Details',
    href: '/services',
  },
]

export const navItems = [
  { item: 'Home', link: '/' },
  { item: 'Services', link: '/services' },
  { item: 'About', link: '/about' },
  { item: 'Contact', link: '/contact' },
]

export const massageItems = [
  {
    serviceName: 'Head, Neck and Face',
    serviceDuration: '20 minutes',
    servicePrice: 20,
  },
  {
    serviceName: 'Head, Neck and Shoulder',
    serviceDuration: '15 minutes',
    servicePrice: 15,
  },
  {
    serviceName: 'Half Body',
    serviceDuration: '30 minutes',
    servicePrice: 30,
  },
  {
    serviceName: 'Head, Neck, Shoulder and Arms',
    serviceDuration: '40 minutes',
    servicePrice: 40,
  },
  {
    serviceName: 'Full Body',
    serviceDuration: '1 hour',
    servicePrice: 70,
  },
  {
    serviceName: 'Reflexology',
    serviceDuration: '30 minutes',
    servicePrice: 30,
  },
]

export const eyebrowItems = [
  {
    serviceName: 'Eyebrows Shape',
    serviceDuration: '15 minutes',
    servicePrice: 15,
  },
  {
    serviceName: 'Eyebrows tinted',
    serviceDuration: '20 minutes',
    servicePrice: 20,
  },
  {
    serviceName: 'Eyes Combo',
    serviceDuration: '30 minutes',
    servicePrice: 40,
  },
  {
    serviceName: 'Eyelashes tinted',
    serviceDuration: '20 minutes',
    servicePrice: 20,
  },
]

export const waxingItems = [
  {
    serviceName: 'Under Arms',
    serviceDuration: '15 minutes',
    servicePrice: 15,
  },
  {
    serviceName: '1/2 Arms',
    serviceDuration: '20 minutes',
    servicePrice: 20,
  },
  {
    serviceName: '1/2 Legs',
    serviceDuration: '30 minutes',
    servicePrice: 30,
  },
  {
    serviceName: 'Full Arms',
    serviceDuration: '40 minutes',
    servicePrice: 40,
  },
  {
    serviceName: 'Full Legs',
    serviceDuration: '40 minutes',
    servicePrice: 40,
  },
  {
    serviceName: 'Full Face',
    serviceDuration: '30 minutes',
    servicePrice: 30,
  },
  {
    serviceName: ' Eyebrow, Lip and Chin',
    serviceDuration: '30 minutes',
    servicePrice: 30,
  },
  {
    serviceName: 'Bikini',
    serviceDuration: '25 minutes',
    servicePrice: 25,
  },
  {
    serviceName: 'Brazilian',
    serviceDuration: '45 minutes',
    servicePrice: 45,
  },
]

export const facialItems = [
  {
    serviceName: 'Fundamental Facial',
    serviceDuration: '40 minutes',
    servicePrice: 40,
  },
  {
    serviceName: 'Complete Classic Facial',
    serviceDuration: '1 hour',
    servicePrice: 60,
  },
]

export const traditionalItems = [
  {
    serviceName: 'Cupping',
    serviceDuration: '20 minutes',
    servicePrice: 15,
  },
  {
    serviceName: 'GuaSha',
    serviceDuration: '15 minutes',
    servicePrice: 15,
  },
]

export const manicureItems = [
  {
    serviceName: 'Polish',
    serviceDuration: '20 minutes',
    servicePrice: 15,
  },
  {
    serviceName: 'Shape and Polish',
    serviceDuration: '40 minutes',
    servicePrice: 20,
  },
  {
    serviceName: 'Manicure',
    serviceDuration: '50 minutes',
    servicePrice: 30,
  },
  {
    serviceName: 'Pedicure',
    serviceDuration: '50 minutes',
    servicePrice: 35,
  },
]

export const serviceCategory = [
  'Massage',
  'Facial',
  'Eyebrows',
  'Waxing',
  'Manicure and Pedicure',
]
