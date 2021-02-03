import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Navbar from '../shared/components/Navbar';
import { loadProduct } from '../actions/product';
import ProductInfo from '../components/product/productInfo';
import useRouter from '../util/useRouter';

const Product = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const item = useSelector((state) => state.product.item);
  const isLoadingItem = useSelector((state) => state.product.isLoadingItem);
  const productId = router.query.productId;
  useEffect(() => {
    dispatch(loadProduct(productId));
  }, []);
  return (
    <>
      <Navbar />
      <ProductInfo item={ item } isLoadingItem={ isLoadingItem } />
    </>
  );
};

export default Product;
