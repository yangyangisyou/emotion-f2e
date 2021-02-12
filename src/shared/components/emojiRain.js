import styled, { keyframes } from 'styled-components';

const fall = keyframes`
  to{
    transform: translateY(101vh);
  }
`;

const RainWrapper = styled.div`
    position: fixed;
    min-height: 105vh;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99999;
    .drop {
      position: fixed;
      top: -1vh;
      font-size: 2rem;
      transform: translateY(0);
      animation: ${fall} 3s linear forwards;
    }
`;

const EmojiRain = () => {
  return <RainWrapper className="rain" />;
};

export default EmojiRain;
