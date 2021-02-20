import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Navbar from '../shared/components/Navbar';
import { loadProduct, loadCanvas } from '../actions/product';
import ProductInfo from '../components/product';
import useRouter from '../util/useRouter';
import LoadingModal from '../shared/components/loadingModal';

const Product = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const item = useSelector((state) => state.product.item);
  const isLoadingItem = useSelector((state) => state.product.isLoadingItem);
  const canvasImage = useSelector((state) => state.product.canvasImage);
  const isLoadingCanvasImage = useSelector((state) => state.product.isLoadingCanvasImage);
  const productId = router.query.productId;

  useEffect(() => {
    dispatch(loadProduct(productId));
  }, []);

  useEffect(() => {
    dispatch(loadCanvas(item.imageName));
  }, [item]);

  return (
    <>
      <Navbar />
      {isLoadingCanvasImage && <LoadingModal />}
      <ProductInfo item={ item } canvasImage={ canvasImage } isLoadingItem={ isLoadingItem } isLoadingCanvasImage={ isLoadingCanvasImage } />
    </>
  );
};

export default Product;
