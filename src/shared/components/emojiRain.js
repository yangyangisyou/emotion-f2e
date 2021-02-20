import styled, { keyframes } from 'styled-components';
import { fontsize } from '../../config/var';

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
      font-size: ${fontsize.fontsize32};
      transform: translateY(0);
      animation: ${fall} 3s linear forwards;
    }
`;

const EmojiRain = () => {
  return <RainWrapper className="rain" />;
};

export default EmojiRain;
