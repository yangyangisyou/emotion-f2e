import React, { useEffect } from 'react';
import CanvasBoard from '../components/canvas';
import Navbar from '../shared/components/Navbar';

const Canvas = () => {
  const data = {
    productType: '10000',
    userName: 'coco',
    productName: 'apple',
    description: 'hello',
    picture: 'https://fairylolita.com/wp-content/uploads/DSCF4415.jpg',
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
