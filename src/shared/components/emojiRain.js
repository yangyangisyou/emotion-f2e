import styled, { keyframes } from 'styled-components';

const fall = keyframes`
  to{
    transform: translateY(101vh);
  }
`;

const RainWrapper = styled.div`
  min-height: 105vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .drop {
    position: fixed;
    top: -1vh;
    font-size: 2rem;
    transform: translateY(0);
    animation: ${fall} 3s linear forwards;
  }
`;

const EmojiRain = () => {
  // const emojis = ['❄️', '🕷', '🦧', '🍎', '⚽️', '⏰', '💜', '🔔', '🎵'];
  // const generateDrops = () => {
  //   const drop = document.createElement('div');
  //   drop.classList.add('drop');
  //   drop.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  //   drop.style.left = Math.random() * 100 + 'vw';
  //   drop.style.animationDuration = Math.random() * 2 + 2 + 's';
  //   document.getElementsByClassName('rain')[0].appendChild(drop);
  //   // document.body.appendChild(drop);
  // };

  // setInterval(generateDrops, 2000);
  return <RainWrapper className="rain" />;
};

export default EmojiRain;
