import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import { loadProducts } from '../actions/product';
import Card from './card';

const CardListWrapper = styled.div`

`;

// useDispatch
const CardList = () => {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  console.log('product ', product);
  return (
    <>
      <CardListWrapper>
        <Button variant="contained" color="primary" onClick={ () => dispatch(loadProducts('food')) }>Try it</Button>
        <Card />
      </CardListWrapper>
    </>
  );
};

export default CardList;
