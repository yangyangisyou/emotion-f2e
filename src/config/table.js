import FoodieImage from '../assets/image/yummy.png';
// import TravelImage from '../assets/image/excited.png';
import TravelImage from '../assets/image/cool.png';
import CureImage from '../assets/image/hug.png';

// https://pngtree.com/so/eggplant-emoji
export const landingImageTable = {
  10000: FoodieImage,
  20000: TravelImage,
  30000: CureImage,
};

export const categories = {
  10000: [
    { label: 'fruit', value: 10100 },
    { label: 'dessert', value: 10200 },
    { label: 'candy', value: 10300 },
    { label: 'dessert', value: 10400 },
  ],
  20000: [
    { label: 'relax', value: 20100 },
    { label: 'business', value: 20200 },
    { label: 'western', value: 20300 },
    { label: 'eastern', value: 20400 },
  ],
  30000: [
    { label: 'cat', value: 30100 },
    { label: 'pet', value: 30200 },
    { label: 'child', value: 30300 },
    { label: 'heart', value: 30400 },
    { label: 'mind', value: 30500 },

  ],
};

export const titleList = [
  { productName: 'Foodie', productNo: '10000' },
  { productName: 'Travel', productNo: '20000' },
  { productName: 'Cure', productNo: '30000' },
];
