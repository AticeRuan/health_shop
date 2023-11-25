import hero1 from '../assets/hero1.jpg'
import hero2 from '../assets/hero2.jpg'
import hero3 from '../assets/hero3.jpg'
import hero4 from '../assets/hero4.jpg'
import hero5 from '../assets/hero5.jpg'
import hero6 from '../assets/hero6.jpg'
import hero7 from '../assets/hero7.jpg'

// export const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
export const carouselItems = [
  {
    imgUrl: hero1,
    alt: 'massage',
    title: 'Reflexology',
    desc: 'Revitalize Your Sole, Unwind Your Whole: Reflexology Full Body Massage, Where Relaxation Meets Rejuvenation',
    buttonText: 'Enquiry NOW',
    link: '/contact',
  },
  {
    imgUrl: hero2,
    alt: 'traditional remedy',
    title: 'Huangdi Neijing Spirituality',
    desc: 'Inner Canon of the Yellow Emperor: Embracing the Wisdom of Huangdi Neijing',
    buttonText: 'Learn More',
    id: 'block1',
    href: '/#block1',
  },
  {
    imgUrl: hero3,
    alt: 'traditional remedy',
    title: 'Herbal Remeday',
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
    link: '/contact',
  },
  {
    imgUrl: hero5,
    alt: 'facial',
    title: 'Facial Relaxation',
    desc: 'Revitalize Your Radiance: Unveil the Beauty Within.',
    buttonText: 'Enquiry NOW',
    link: '/contact',
  },
  {
    imgUrl: hero7,
    alt: 'cupping',
    title: 'Chinese Essence Therapy',
    desc: ' Unveil Harmony, Restore Vitality, and Elevate Your Well-being with Ancient Wisdom and Modern Care',
    buttonText: 'Enquiry NOW',
    link: '/services',
  },
  {
    imgUrl: hero6,
    alt: 'massage',
    title: 'More services avaiable',
    desc: 'Targeted massage,precision waxing solutions,precision brow sculpting and tinting and more...',
    buttonText: 'See Details',
    link: '/services',
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
    serviceDuration: '60 minutes',
    servicePrice: 70,
  },
  {
    serviceName: 'Luxi Full Body',
    serviceDuration: '90 minutes',
    servicePrice: 90,
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
    serviceDuration: '',
    servicePrice: 8,
  },
  {
    serviceName: 'Eyebrows tinted',
    serviceDuration: '',
    servicePrice: 20,
  },
  {
    serviceName: 'Eyes Combo',
    serviceDuration: '',
    servicePrice: 30,
  },
  {
    serviceName: 'Eyelashes tinted',
    serviceDuration: '',
    servicePrice: 20,
  },
]

export const waxingItems = [
  {
    serviceName: 'Under Arms',
    serviceDuration: '',
    servicePrice: 15,
  },
  {
    serviceName: '1/2 Arms',
    serviceDuration: '',
    servicePrice: 20,
  },
  {
    serviceName: '1/2 Legs',
    serviceDuration: '',
    servicePrice: 30,
  },
  {
    serviceName: 'Full Arms',
    serviceDuration: '',
    servicePrice: 40,
  },
  {
    serviceName: 'Full Legs',
    serviceDuration: '',
    servicePrice: 40,
  },
  {
    serviceName: 'Full Face',
    serviceDuration: '',
    servicePrice: 30,
  },
  {
    serviceName: ' Eyebrow, Lip and Chin',
    serviceDuration: '',
    servicePrice: 30,
  },
  {
    serviceName: 'Bikini',
    serviceDuration: '',
    servicePrice: 25,
  },
  {
    serviceName: 'Brazilian',
    serviceDuration: '',
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
    serviceDuration: '60 minutes',
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
    serviceName: 'Gua Sha',
    serviceDuration: '15 minutes',
    servicePrice: 15,
  },
]

export const manicureItems = [
  {
    serviceName: 'Polish',
    serviceDuration: '',
    servicePrice: 15,
  },
  {
    serviceName: 'Shape and Polish',
    serviceDuration: '',
    servicePrice: 20,
  },
  {
    serviceName: 'Manicure',
    serviceDuration: '',
    servicePrice: 30,
  },
  {
    serviceName: 'Pedicure',
    serviceDuration: '',
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
