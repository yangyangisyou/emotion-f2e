import FoodieImage from '../assets/image/yummy.png';
// import TravelImage from '../assets/image/excited.png';
import TravelImage from '../assets/image/cool.png';
import CureImage from '../assets/image/hug.png';

export const CATEGORIES = {
  FOODIE: '10000',
  TRAVEL: '20000',
  CURE: '30000',
  OTHER: '99999',
};

export const largeCatTable = {
  [CATEGORIES.FOODIE]: 'Foodie',
  [CATEGORIES.TRAVEL]: 'Travel',
  [CATEGORIES.CURE]: 'Cure',
};

// https://pngtree.com/so/eggplant-emoji
export const landingImageTable = {
  [CATEGORIES.FOODIE]: FoodieImage,
  [CATEGORIES.TRAVEL]: TravelImage,
  [CATEGORIES.CURE]: CureImage,
};

export const categories = {
  [CATEGORIES.FOODIE]: [
    { label: 'fruit', value: 10100 },
    { label: 'dessert', value: 10200 },
    { label: 'candy', value: 10300 },
    { label: 'dessert', value: 10400 },
  ],
  [CATEGORIES.TRAVEL]: [
    { label: 'relax', value: 20100 },
    { label: 'business', value: 20200 },
    { label: 'western', value: 20300 },
    { label: 'eastern', value: 20400 },
  ],
  [CATEGORIES.CURE]: [
    { label: 'cat', value: 30100 },
    { label: 'pet', value: 30200 },
    { label: 'child', value: 30300 },
    { label: 'heart', value: 30400 },
    { label: 'mind', value: 30500 },

  ],
};

export const catList = [
  { productName: 'Foodie', productNo: CATEGORIES.FOODIE },
  { productName: 'Travel', productNo: CATEGORIES.TRAVEL },
  { productName: 'Cure', productNo: CATEGORIES.CURE },
  { productName: 'Other', productNo: CATEGORIES.OTHER },
];

export const titleList = [
  { productName: 'Foodie', productNo: CATEGORIES.FOODIE },
  { productName: 'Travel', productNo: CATEGORIES.TRAVEL },
  { productName: 'Cure', productNo: CATEGORIES.CURE },
];

export const editSteps = ['Filling', 'Painting', 'Publish'];
