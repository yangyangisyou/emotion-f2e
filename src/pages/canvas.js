import React, { useEffect } from 'react';
import CanvasBoard from '../components/canvas';
import Navbar from '../shared/components/Navbar';

const Canvas = () => {
  const data = {
    userName: 'coco',
    productName: 'apple',
    productType: '10000',
  };
  useEffect(() => {
    console.log('go');
  }, []);
  return (
    <>
      <Navbar />
      <CanvasBoard data={ data } />
    </>
  );
};

export default Canvas;
