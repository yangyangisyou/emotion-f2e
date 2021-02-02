import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CanvasBoard from '../components/canvas/canvas';
import Navbar from '../shared/components/Navbar';
import StepFooter from '../shared/components/stepFooter';
import { uploadImage, loadProduct } from '../actions/product';
import useRouter from '../util/useRouter';

const Canvas = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const router = useRouter();
  const [data, setData] = useState({
    productType: '10000',
    userName: 'coco',
    productName: 'apple',
    description: 'hello',
    picture: 'https://fairylolita.com/wp-content/uploads/DSCF4415.jpg',
  });
  useEffect(() => {
    const dataFromStorage = localStorage.getItem('editStorage');
    console.log('dataFromStorage ', dataFromStorage);
    const productId = router.query.productId;
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

  const onUploadCanvas = async (canvasRef) => {
    console.log('canvasRef ', canvasRef);
    const canvasImage = canvasRef.current.toDataURL();
    console.log('canvasImage ', canvasImage);
    const result = await new Promise((resolve) => resolve(dispatch(uploadImage(canvasImage))));
    console.log('result ', result);
    if (result.payload.success) {
      const productId = result.payload.productId;
      history.push(`/publish?productId=${productId}`);
    }
  };
  return (
    <>
      <Navbar />
      <CanvasBoard data={ data } onUploadCanvas={ onUploadCanvas } />
      <StepFooter activeStep={ 1 } />
    </>
  );
};

export default Canvas;
