import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CanvasBoard from '../components/canvas/canvas';
import Navbar from '../shared/components/Navbar';
import StepFooter from '../shared/components/stepFooter';
import { uploadImage, loadProduct } from '../actions/product';
import useRouter from '../util/useRouter';
import LoadingModal from '../shared/components/loadingModal';

const Canvas = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isLoadingUploadCanvas = useSelector((state) => state.product.isLoadingUploadCanvas);
  const router = useRouter();
  let canvasRef = useRef(null);
  const productId = router.query.productId;
  const [data, setData] = useState(null);
  useEffect(() => {
    const dataFromStorage = localStorage.getItem('editStorage');
    if (dataFromStorage) {
      setData(JSON.parse(dataFromStorage));
    } else {
      const result = dispatch(loadProduct(productId));
      if (result.payload && result.payload.success) {
        const payload = result.payload;
        setData(JSON.parse(payload));
      }
    }
  }, []);

  const onUploadCanvas = async (ref) => {
    const canvasImage = ref.current.toDataURL();
    const uploadPayload = {
      image: canvasImage,
      productId: productId,
    };
    const result = await new Promise((resolve) => resolve(dispatch(uploadImage(uploadPayload))));
    if (result.payload && result.payload.success) {
      history.push(`/publish?productId=${productId}`);
    }
  };
  return (
    <>
      <Navbar />
      {isLoadingUploadCanvas && <LoadingModal />}
      {data && <CanvasBoard data={ data } onUploadCanvas={ onUploadCanvas } canvasRef={ canvasRef } />}
      <StepFooter activeStep={ 1 } stepRef={ canvasRef } onUploadCanvas={ onUploadCanvas } router={ router } />
    </>
  );
};

export default Canvas;
