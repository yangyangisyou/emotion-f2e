import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Stage, Layer, Text, Image, Rect
} from 'react-konva';
import useImage from 'use-image';
// import cool from '../../assets/image/cool.png';
// import hug from '../../assets/image/hug.png';
// import yummy from '../../assets/image/yummy.png';
import useWindowDimensions from '../../util/useWindowDimensions';
import { emojiList } from '../../config/table';

const CanvasFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .canvas-tool {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80vw;
    margin: 20px;
    padding: 10px;
    border: black 1px solid;
    border-radius: 10px;
    .canvas-icon {
      width: 50px;
      height: 50px;
    }
  }
  @media screen and (max-width: 768px) {
    .canvas-tool {
      width: 90vw;
      margin: 10px;
      .canvas-icon {
        width: 40px;
        height: 40px;
      }
    }
  }
  /* width: 500px;
  height: 500px;
  border: black 1px solid; */
`;

const EmojiList = styled.div`
  display: flex;
  flex: auto;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  width: 80vw;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar:horizontal {
    height: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparentize(#ccc, 0.7);
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: transparentize(#ccc, 0.5);
    box-shadow: inset 0 0 2px rgba(0,0,0,0.5); 
  }
  .canvas-emoji {
    margin-left: 20px;
    cursor: pointer;
    font-size: 40px;
  }
`;

const Canvas = ({ data, onUploadCanvas, canvasRef }) => {
  const initialWidth = window.innerWidth;
  const initialHeight = window.innerHeight;
  const { width, height } = useWindowDimensions();
  const { productName, description, picture } = data;
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
  // const onCreateIcon = (image) => {
  //   const newX = Math.floor(Math.random() * ((width / 100) * 80 - (width / 100) * 20) + (width / 100) * 20);
  //   const newY = Math.floor(Math.random() * ((height / 100) * 70 - (height / 100) * 30) + (height / 100) * 30);
  //   setIconList([
  //     ...iconList,
  //     {
  //       x: newX, y: newY, src: image, key: iconList.length + 1
  //     }
  //   ]);
  // };
  return (
    <CanvasFrame>
      <EmojiList>
        { emojiList.emotion.map((emoji) => <span className="canvas-emoji">{emoji}</span>) }
      </EmojiList>
      {/* <ul className="canvas-tool">
        <li className="canvas-tool-element" onClick={ () => onCreateIcon(cool) }>
          <img className="canvas-icon" src={ cool } alt="icon-1" />
        </li>
        <li className="canvas-tool-element" onClick={ () => onCreateIcon(hug) }>
          <img className="canvas-icon" src={ hug } alt="icon-2" />
        </li>
        <li className="canvas-tool-element" onClick={ () => onCreateIcon(yummy) }>
          <img className="canvas-icon" src={ yummy } alt="icon-3" />
        </li>
        <li className="canvas-tool-element" onClick={ () => onUploadCanvas(canvasRef) }>
          <p>SUBMIT</p>
        </li>
      </ul> */}
      <Stage width={ initialWidth } height={ initialHeight - 300 } ref={ canvasRef }>
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
  const [img] = useImage(image.src, 'Anonymous');
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
  const [img] = useImage(image.src, 'Anonymous');
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
