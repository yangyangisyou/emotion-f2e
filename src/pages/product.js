import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import useQuery from '../util/query';
import { loadProduct } from '../actions/product';
import ProductInfo from '../components/productInfo';

const Product = () => {
  const query = useQuery();
  const dispatch = useDispatch();
  const item = useSelector((state) => state.product.item);
  const isLoadingItem = useSelector((state) => state.product.isLoadingItem);
  const productNo = query.value.productNo;
  useEffect(() => {
    dispatch(loadProduct('10000', productNo));
  }, []);
  return (
    <>
      <Navbar />
      <ProductInfo item={ item } isLoadingItem={ isLoadingItem } />
    </>
  );
};

export default Product;
