import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CanvasBoard from '../components/canvas';
import Navbar from '../shared/components/Navbar';
import StepFooter from '../shared/components/stepFooter';
import { uploadImage, loadProduct } from '../actions/product';
import useRouter from '../util/useRouter';
import LoadingModal from '../shared/components/loadingModal';

const Canvas = () => {
  const dispatch = useDispatch();
  const canvasDataFromServer = useSelector((state) => state.product.item);
  const router = useRouter();
  let canvasRef = useRef(null);
  const productId = router.query.productId;
  const [data, setData] = useState(null);
  useEffect(() => {
    const dataFromStorage = localStorage.getItem('editStorage');
    if (productId) {
      dispatch(loadProduct(productId));
    } else if (dataFromStorage) {
      setData(JSON.parse(dataFromStorage));
    }
  }, []);

  useEffect(() => {
    setData(canvasDataFromServer);
  }, [canvasDataFromServer]);

  const onUploadCanvas = async (ref) => {
    const canvasImage = ref.current.toDataURL();
    const uploadPayload = {
      image: canvasImage,
      productId: productId,
    };
    const result = await new Promise((resolve) => resolve(dispatch(uploadImage(uploadPayload))));
    if (result.payload && result.payload.success) {
      router.history.push(`/publish?productId=${productId}`);
    }
  };
  return (
    <>
      <Navbar />
      {data ? <CanvasBoard data={ data } onUploadCanvas={ onUploadCanvas } canvasRef={ canvasRef } /> : <LoadingModal />}
      <StepFooter activeStep={ 1 } stepRef={ canvasRef } onUploadCanvas={ onUploadCanvas } router={ router } />
    </>
  );
};

export default Canvas;
