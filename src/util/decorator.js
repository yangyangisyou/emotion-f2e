import { emojiList, largeCatTable, CATEGORIES } from '../config/table';

export const generateDrops = (type) => {
  const selectedEmojiList = emojiList[largeCatTable[type || CATEGORIES.OTHER]];
  const drop = document.createElement('div');
  drop.classList.add('drop');
  drop.innerText = selectedEmojiList[Math.floor(Math.random() * selectedEmojiList.length)];
  drop.style.left = Math.random() * 100 + 'vw';
  drop.style.zIndex = 99999;
  drop.style.animationDuration = Math.random() * 2 + 2 + 's';
  document.getElementsByClassName('rain')[0].appendChild(drop);
};

export const onSnowingEmoji = (type, count) => {
  for (let i = 0; i <= (count || 50); i++) {
    generateDrops(type);
  }
};
