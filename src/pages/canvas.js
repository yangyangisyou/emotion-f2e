import React, { useEffect, useState } from 'react';
import CanvasBoard from '../components/canvas';
import Navbar from '../shared/components/Navbar';

const Canvas = () => {
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
  return (
    <>
      <Navbar />
      <CanvasBoard data={ data } />
    </>
  );
};

export default Canvas;
