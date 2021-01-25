import styled from 'styled-components';
// import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';
import Card from './card';

const CardListWrapper = styled.ul`
  display: flex;
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
`;

// useDispatch
const CardList = ({ isLoading }) => {
  const products = useSelector((state) => state.product.data);
  console.log('products ', products);
  console.log('isLoading', isLoading);
  return (
    <>
      <CardListWrapper>
        {/* <Button variant="contained" color="primary" onClick={ () => dispatch(loadProducts('food')) }>Try it</Button> */}
        { products.map((product, key) => <Card product={ product } isLoading={ isLoading } key={ key } />) }
      </CardListWrapper>
    </>
  );
};

export default CardList;
