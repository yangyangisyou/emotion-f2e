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
    /* body {
      background-color: olive;
    } */
  }
`;

const CardList = ({ productList, isLoading }) => {
  return (
    <>
      <CardListWrapper>
        { productList.map((product, key) => <Card product={ product } isLoading={ isLoading } key={ key } />) }
      </CardListWrapper>
    </>
  );
};

export default CardList;
