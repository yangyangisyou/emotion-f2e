import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Stage, Layer, Text, Image
} from 'react-konva';
import useImage from 'use-image';
// import icon from '../assets/image/cool.png';

const CanvasFrame = styled.div`
  .canvas-tool {
    display: flex;
    justify-content: space-around;
    width: 80vw;  
    margin: 20px;
    padding: 10px;
    border: black 1px solid;
    border-radius: 10px;
  }
  /* width: 500px;
  height: 500px;
  border: black 1px solid; */
`;

const Canvas = ({ data }) => {
  const [iconList] = useState(
    [
      {
        x: 50, y: 50, content: ''
      },
    ]
  );
  console.log('iconList ', iconList);
  const [isDragging, setIsDragging] = useState(false);
  const [x, setX] = useState(50);
  const [y, setY] = useState(50);
  console.log('data ', data);
  // const onCreateIcon = () => {

  // };
  return (
    <CanvasFrame>
      <ul className="canvas-tool">
        <li className="canvas-tool-image">
          image no.1
        </li>
        <li className="canvas-tool-image">
          image no.2
        </li>
        <li className="canvas-tool-image">
          image no.3
        </li>
      </ul>
      <Stage width={ window.innerWidth } height={ window.innerHeight }>
        <Layer>
          <URLImage
            image={ {
              x: 100,
              y: 100,
              src: 'https://konvajs.org/assets/lion.png',
            } }
            // x={ 100 }
            // y={ 100 }
            // image="https://konvajs.org/assets/lion.png"
          />
          {/* <Image
            x={ 100 }
            y={ 100 }
            image="../assets/image/cool.png"
          /> */}
          <Text
            text="Draggable Text"
            x={ x }
            y={ y }
            draggable
            fill={ isDragging ? 'green' : 'black' }
            onDragStart={ () => setIsDragging(true) }
            onDragEnd={ (element) => {
              setIsDragging(false);
              setX(element.target.x());
              setY(element.target.y());
            } }
          />
        </Layer>
      </Stage>
    </CanvasFrame>
  );
};

const URLImage = ({ image }) => {
  const [img] = useImage(image.src);
  return (
    <Image
      image={ img }
      x={ image.x }
      y={ image.y }
      // I will use offset to set origin to the center of the image
      offsetX={ img ? img.width / 2 : 0 }
      offsetY={ img ? img.height / 2 : 0 }
    />
  );
};

export default Canvas;
