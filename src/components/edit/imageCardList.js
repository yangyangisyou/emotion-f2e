import styled from 'styled-components';
import Card from './imageCard';

const CardListWrapper = styled.ul`
  display: flex;
  flex: auto;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
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

const ImageCardList = ({
  imageList, selectedNo, onSelect, isLoading
}) => {
  console.log('imageList ', imageList);
  return (
    <>
      <CardListWrapper>
        { imageList.map((images, key) => <Card images={ images } isLoading={ isLoading } key={ key } selected={ selectedNo === key } onSelect={ () => onSelect(key, images.largeImage) } />) }
      </CardListWrapper>
    </>
  );
};

export default ImageCardList;
