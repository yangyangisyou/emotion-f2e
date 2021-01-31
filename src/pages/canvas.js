import React, { useEffect } from 'react';
import CanvasBoard from '../components/canvas';
import Navbar from '../shared/components/Navbar';

const Canvas = () => {
  const data = {
    productType: '10000',
    userName: 'coco',
    productName: 'apple',
    description: 'hello',
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
