import { emojiList, largeCatTable } from '../config/table';

export const generateDrops = (searchType) => {
  const selectedEmojiList = emojiList[largeCatTable[searchType]];
  const drop = document.createElement('div');
  drop.classList.add('drop');
  drop.innerText = selectedEmojiList[Math.floor(Math.random() * selectedEmojiList.length)];
  drop.style.left = Math.random() * 100 + 'vw';
  drop.style.animationDuration = Math.random() * 2 + 2 + 's';
  document.getElementsByClassName('rain')[0].appendChild(drop);
};

export const onSnowingEmoji = (searchType, count) => {
  for (let i = 0; i <= (count || 50); i++) {
    generateDrops(searchType);
  }
};
