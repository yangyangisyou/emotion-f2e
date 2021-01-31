import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import {
  Stage, Layer, Text, Image, Rect
} from 'react-konva';
import useImage from 'use-image';
import cool from '../assets/image/cool.png';
import hug from '../assets/image/hug.png';
import yummy from '../assets/image/yummy.png';

const CanvasFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .canvas-tool {
    display: flex;
    justify-content: space-around;
    width: 80vw;  
    margin: 20px;
    padding: 10px;
    border: black 1px solid;
    border-radius: 10px;
    .canvas-tool-icon {
      width: 50px;
      height: 50px;
    }
  }
  /* width: 500px;
  height: 500px;
  border: black 1px solid; */
`;

const Canvas = ({ data }) => {
  const initialWidth = window.innerWidth;
  const initialHeight = window.innerHeight;

  const { productName, description, picture } = data;
  const canvasRef = useRef();
  const [iconList, setIconList] = useState([]);
  const [productNameCoord, setProductNameCoord] = useState({
    x: initialWidth / 2 - 300,
    y: initialHeight / 2 - 270,
    isDragging: false,
  });
  const [descriptionCoord, setDescriptionCoord] = useState({
    x: initialWidth / 2 - 300,
    y: initialHeight / 2 - 200,
    isDragging: false,
  });
  console.log('data ', data);
  const onCreateIcon = (image) => {
    const newX = Math.floor(Math.random() * Math.floor(window.innerWidth));
    const newY = Math.floor(Math.random() * Math.floor(window.innerHeight));
    setIconList([
      ...iconList,
      {
        x: newX, y: newY, src: image, key: iconList.length + 1
      }
    ]);
  };
  return (
    <CanvasFrame>
      <ul className="canvas-tool">
        <li className="canvas-tool-element" onClick={ () => onCreateIcon(cool) }>
          <img className="canvas-tool-icon" src={ cool } alt="icon-1" />
        </li>
        <li className="canvas-tool-image" onClick={ () => onCreateIcon(hug) }>
          <img className="canvas-tool-icon" src={ hug } alt="icon-2" />
        </li>
        <li className="canvas-tool-image" onClick={ () => onCreateIcon(yummy) }>
          <img className="canvas-tool-icon" src={ yummy } alt="icon-3" />
        </li>
      </ul>
      <Stage width={ initialWidth } height={ initialHeight - 300 } ref={ canvasRef }>
        <Layer>
          <BackgroundImage width={ initialWidth } image={ { x: 0, y: 0, src: picture } } />
          <Rect
            x={ initialWidth / 2 - 400 }
            y={ 100 }
            width={ initialWidth / 2 }
            height={ initialHeight - 500 }
            fill="white"
            shadowBlur={ 10 }
          />
          { iconList.map((element) => <URLImage image={ element } />) }
          <Text
            text={ productName }
            fontSize={ 30 }
            x={ productNameCoord.x }
            y={ productNameCoord.y }
            draggable
            onDragStart={ () => setProductNameCoord({ ...productNameCoord, isDragging: true }) }
            onDragEnd={ (element) => {
              setProductNameCoord({
                x: element.target.x(),
                y: element.target.y(),
                isDragging: false,
              });
            } }
          />
          <Text
            text={ description }
            fontSize={ 24 }
            x={ descriptionCoord.x }
            y={ descriptionCoord.y }
            draggable
            onDragStart={ () => setDescriptionCoord({ ...descriptionCoord, isDragging: true }) }
            onDragEnd={ (element) => {
              setDescriptionCoord({
                x: element.target.x(),
                y: element.target.y(),
                isDragging: false,
              });
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
      offsetX={ img ? img.width / 2 : 0 }
      offsetY={ img ? img.height / 2 : 0 }
      width={ 100 }
      height={ 100 }
      draggable
    />
  );
};

const BackgroundImage = ({ image, width }) => {
  const [img] = useImage(image.src);
  return (
    <Image
      image={ img }
      x={ image.x }
      y={ image.y }
      width={ width }
      fill={ true }
      opacity="0.3"
    />
  );
};

export default Canvas;
