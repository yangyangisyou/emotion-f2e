import styled from 'styled-components';
import Card from './card';
import { color, fontsize, fontFamily } from '../../config/var';

const CardListWrapper = styled.ul`
  display: flex;
  flex: auto;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  height: 35vh;
  background-color: ${color.mutedBlue};
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar:horizontal {
    height: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparentize(#ccc, 0.7);
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: transparentize(#ccc, 0.5);
    box-shadow: inset 0 0 2px rgba(0,0,0,0.5); 
  }
  .cardlist-notice {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10vh 20vw;
    font-family: ${fontFamily};
    font-size: ${fontsize.fontsize24};
    line-height: ${fontsize.fontsize40};
    font-weight: bold;
    .emptycardlist-emoji {
      font-size: 60px;
    }

    .emptycardlist-textWrap {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    .emptycardlist-emoji + .emptycardlist-textWrap {
      margin-left: 5vw;
    }

    @media screen and (max-width: 768px) {
      flex-direction: column;
      padding: 0 0;
      width: 100vw;
      .emptycardlist-emoji + .emptycardlist-textWrap {
        margin-left: 0;
        margin-top: 5vh;
      }
    }
  }

  @media screen and (max-width: 768px) {
    height: 30vh;
  }
`;

const CardList = ({ productList, isLoading, router }) => {
  const productCount = productList.length;
  return (
    <CardListWrapper>
      { productCount
        ? productList.map((product, key) => <Card product={ product } isLoading={ isLoading } key={ key } router={ router } />)
        : (
          <li className="cardlist-notice">
            <p className="emptycardlist-emoji">🤔</p>
            <div className="emptycardlist-textWrap">
              <p>Nobody share this category.</p>
              <p>Let&apos;s be the first person！</p>
            </div>
          </li>
        )
    }
    </CardListWrapper>
  );
};

export default CardList;
