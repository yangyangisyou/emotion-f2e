import styled from 'styled-components';
import Card from './card';

const CardListWrapper = styled.ul`
  display: flex;
  flex: auto;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  padding: 10px auto;
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
  @media screen and (max-width: 768px) {
  }
`;

const EmptyCardListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10vh 10px;
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  line-height: 40px;
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
    .emptycardlist-emoji + .emptycardlist-textWrap {
      margin-left: 0;
      margin-top: 5vh;

    }
  }

`;

const CardList = ({ productList, isLoading }) => {
  const productCount = productList.length;
  console.log('productCount ', productCount);
  if (productCount) {
    return (
      <>
        <CardListWrapper>
          { productList.map((product, key) => <Card product={ product } isLoading={ isLoading } key={ key } />) }
        </CardListWrapper>
      </>
    );
  } else {
    return (
      <EmptyCardListWrapper>
        <p className="emptycardlist-emoji">🤔</p>
        <div className="emptycardlist-textWrap">
          <p>It seems like nobody share this category.</p>
          <p>Let&apos;s be the first person to share！</p>
        </div>
      </EmptyCardListWrapper>
    );
  }
};

export default CardList;
