import styled, { keyframes } from 'styled-components';
import { useEffect } from 'react';
import { onSnowingEmoji } from '../../util/decorator';
import EmojiRain from '../../shared/components/emojiRain';
import { fontsize } from '../../config/var';

const float = keyframes`
  0% {
    text-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
    transform: translatey(0px);
  }
  50% {
    text-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
    transform: translatey(-20px);
  }
  100% {
    text-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
    transform: translatey(0px);
  }
`;

const PublishWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 20vh;

    .publish-field {
      margin: 20px 0px;
      text-align: center;
    }

    .publish-field-title {
      font-size: ${fontsize.fontsize24};
    }

    .publish-field-content {
      font-size: ${fontsize.fontsize20};
      width: 90vw;
    }

      .publish-attractText {
        text-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
        transform: translatey(0px);
        animation: ${float} 4s ease-in-out infinite;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 70px;
      }
`;

const PublishProduct = () => {
  useEffect(() => {
    onSnowingEmoji('30000', 30);
  }, []);
  setInterval(() => {
    onSnowingEmoji('30000', 10);
  }, 3000);
  return (
    <PublishWrapper>
      <EmojiRain />
      <p className="publish-attractText">🥳️</p>
      <h1 className="publish-field publish-field-title">Cheers, You finished your sharing！</h1>
      <p className="publish-field publish-field-content">You can simply download or just share the link to your friends.</p>
    </PublishWrapper>
  );
};

export default PublishProduct;
