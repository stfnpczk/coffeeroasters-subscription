import granEspressoImg from '/public/home/desktop/image-gran-espresso.png';
import planaltoImg from '/public/home/desktop/image-planalto.png';
import piccolloImg from '/public/home/desktop/image-piccollo.png';
import dancheImg from '/public/home/desktop/image-danche.png';
import beanIcon from '/public/home/desktop/icon-coffee-bean.svg';
import giftIcon from '/public/home/desktop/icon-gift.svg';
import truckIcon from '/public/home/desktop/icon-truck.svg';

import iconUk from '/public/about/desktop/illustration-uk.svg';
import iconCanada from '/public/about/desktop/illustration-canada.svg';
import iconAustralia from '/public/about/desktop/illustration-australia.svg';

export const collection = [
  {
    imageSource: granEspressoImg,
    heading: 'Gran Espresso',
    description:
      'Light and flavorful blend with cocoa and black pepper for an intense experience',
  },
  {
    imageSource: planaltoImg,
    heading: 'Planalto',
    description:
      'Brazilian dark roast with rich and velvety body, and hints of fruits and nuts',
  },
  {
    imageSource: piccolloImg,
    heading: 'Piccollo',
    description:
      'Mild and smooth blend featuring notes of toasted almond and dried cherry',
  },
  {
    imageSource: dancheImg,
    heading: 'Danche',
    description:
      'Ethiopian hand-harvested blend densely packed with vibrant fruit notes',
  },
];

export const chooseUs = [
  {
    imageSource: beanIcon,
    alt: 'coffee bean',
    heading: 'Best quality',
    description:
      'Discover an endless variety of the world’s best artisan coffee from each of our roasters.',
  },
  {
    imageSource: giftIcon,
    alt: 'gift',
    heading: 'Exclusive benefits',
    description:
      'Special offers and swag when you subscribe, including 30% off your first shipment.',
  },
  {
    imageSource: truckIcon,
    alt: 'truck',
    heading: 'Free shipping',
    description:
      'We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.',
  },
];

export const headquarters = [
  {
    iconSrc: iconUk,
    country: 'United Kingdom',
    information: {
      street: '68 Ashfordby Rd',
      city: 'Alcaston',
      state: 'SY6 1YA',
      phone: '+44 1241 918425',
    },
  },
  {
    iconSrc: iconCanada,
    country: 'Canada',
    information: {
      street: '1529 Eglington Avenue',
      city: 'Toronto',
      state: 'Ontario M4P 1A6',
      phone: '+1 416 485 2997',
    },
  },
  {
    iconSrc: iconAustralia,
    country: 'Australia',
    information: {
      street: '36 Swanston Street',
      city: 'Kewell',
      state: 'Victoria',
      phone: '+61 4 9928 3629',
    },
  },
];

export const preferenceOptions = [
  {
    id: 'option1',
    value: 'Capsules',
    heading: 'Capsule',
    paragraph: 'Compatible with Nespresso systems and similar brewers',
  },
  {
    id: 'option2',
    value: 'Filter',
    heading: 'Filter',
    paragraph: 'For pour over or drip methods like Aeropress, Chemex, and V60.',
  },
  {
    id: 'option3',
    value: 'Espresso',
    heading: 'Espresso',
    paragraph:
      'Dense and finely ground beans for an intense, flavorful experience.',
  },
];

export const beantypeOptions = [
  {
    id: 'option4',
    value: 'Simple Origin',
    heading: 'Simple Origin',
    paragraph:
      'Distinct, high quality coffee from a specific family-owned farm.',
  },
  {
    id: 'option5',
    value: 'Decaf',
    heading: 'Decaf',
    paragraph: 'Just like regular coffee, except the caffeine has been removed',
  },
  {
    id: 'option6',
    value: 'Blended',
    heading: 'Blended',
    paragraph:
      'Combination of two or three dark roasted beans of organic coffees',
  },
];

export const quantityOptions = [
  {
    id: 'option7',
    value: '250g',
    heading: '250g',
    paragraph: 'Perfect for the solo drinker. Yields about 12 delicious cups.',
  },
  {
    id: 'option8',
    value: '500g',
    heading: '500g',
    paragraph: 'Perfect option for a couple. Yields about 40 delectable cups.',
  },
  {
    id: 'option9',
    value: '1000g',
    heading: '1000g',
    paragraph:
      'Perfect for offices and events. Yields about 90 delightful cups.',
  },
];

export const grindOptions = [
  {
    id: 'option10',
    value: 'Wholebean',
    heading: 'Wholebean',
    paragraph: 'Best choice if you cherish the full sensory experience.',
  },
  {
    id: 'option11',
    value: 'Filter',
    heading: 'Filter',
    paragraph: 'For drip or pour-over coffee methods such as V60 or Aeropress.',
  },
  {
    id: 'option12',
    value: 'Cafetiére',
    heading: 'Cafetiére',
    paragraph: 'Course ground beans specially suited for French press coffee.',
  },
];

export const deliveryOptions = [
  {
    id: 'option13',
    value: 'Every week',
    heading: 'Every week',
    priceKey: 'Every week',
    paragraph: 'Includes free first-class shipping.',
  },
  {
    id: 'option14',
    value: 'Every 2 weeks',
    heading: 'Every 2 weeks',
    priceKey: 'Every 2 weeks',
    paragraph: 'Includes free priority shipping.',
  },
  {
    id: 'option15',
    value: 'Every month',
    heading: 'Every month',
    priceKey: 'Every month',
    paragraph: 'Includes free priority shipping.',
  },
];

export const prices = {
  '250g': { 'Every week': 7.2, 'Every 2 weeks': 9.6, 'Every month': 12.0 },
  '500g': { 'Every week': 13.0, 'Every 2 weeks': 17.5, 'Every month': 22.0 },
  '1000g': { 'Every week': 22.0, 'Every 2 weeks': 29.0, 'Every month': 36.0 },
};
