import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CanvasBoard from '../components/canvas/canvas';
import Navbar from '../shared/components/Navbar';
import StepFooter from '../shared/components/stepFooter';
import { uploadImage } from '../actions/product';

const Canvas = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    productType: '10000',
    userName: 'coco',
    productName: 'apple',
    description: 'hello',
    picture: 'https://fairylolita.com/wp-content/uploads/DSCF4415.jpg',
  });
  useEffect(() => {
    // console.log('go');
    const dataFromStorage = localStorage.getItem('editStorage');
    console.log('dataFromStorage ', dataFromStorage);
    if (dataFromStorage) {
      setData(JSON.parse(dataFromStorage));
    }
  }, []);

  const onUploadCanvas = async (canvasRef) => {
    console.log('canvasRef ', canvasRef);
    const canvasImage = canvasRef.current.toDataURL();
    console.log('canvasImage ', canvasImage);
    const result = await new Promise((resolve) => resolve(dispatch(uploadImage(canvasImage))));
    console.log('result ', result);
    if (result.payload.success) {
      history.push('/publish');
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
