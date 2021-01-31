import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import {
  Stage, Layer, Text, Image, Rect
} from 'react-konva';
import useImage from 'use-image';
import cool from '../../assets/image/cool.png';
import hug from '../../assets/image/hug.png';
import yummy from '../../assets/image/yummy.png';
import useWindowDimensions from '../../util/useWindowDimensions';

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
  const { width, height } = useWindowDimensions();
  const { productName, description, picture } = data;
  const canvasRef = useRef();
  const [iconList, setIconList] = useState([]);
  const [productNameCoord, setProductNameCoord] = useState({
    x: (width / 100) * 40,
    y: (height / 100) * 20,
    isDragging: false,
  });
  const [descriptionCoord, setDescriptionCoord] = useState({
    x: (width / 100) * 40,
    y: (height / 100) * 30,
    isDragging: false,
  });
  console.log('data ', data);
  const onCreateIcon = (image) => {
    const newX = Math.floor(Math.random() * ((width / 100) * 80 - (width / 100) * 20) + (width / 100) * 20);
    const newY = Math.floor(Math.random() * ((height / 100) * 70 - (height / 100) * 30) + (height / 100) * 30);
    setIconList([
      ...iconList,
      {
        x: newX, y: newY, src: image, key: iconList.length + 1
      }
    ]);
  };
  return (
    <CanvasFrame ref={ canvasRef }>
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
      <Stage width={ initialWidth } height={ initialHeight - 300 }>
        <Layer>
          <BackgroundImage width={ initialWidth } image={ { x: 0, y: 0, src: picture } } />
          <Rect
            x={ (width / 100) * 20 }
            y={ 100 }
            width={ (width / 100) * 60 }
            height={ (height / 100) * 40 }
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
