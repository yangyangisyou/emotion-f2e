const emojis = ['❄️', '🕷', '🦧', '🍎', '⚽️', '⏰', '💜', '🔔', '🎵'];

export const generateDrops = () => {
  const drop = document.createElement('div');
  drop.classList.add('drop');
  drop.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  drop.style.left = Math.random() * 100 + 'vw';
  drop.style.animationDuration = Math.random() * 2 + 2 + 's';
  document.getElementsByClassName('rain')[0].appendChild(drop);
};

export const onSnowingEmoji = (count) => {
  for (let i = 0; i <= (count || 50); i++) {
    generateDrops();
  }
};
