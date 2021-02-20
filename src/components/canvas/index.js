import React, { useState } from 'react';
import styled from 'styled-components';
import { Stage } from 'react-konva';
import useWindowDimensions from '../../util/useWindowDimensions';
import CanvasLayer from './canvasLayer';
import CanvasTools from './canvasTools';

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
`;

const Canvas = ({ data, canvasRef }) => {
  const initialWidth = window && window.innerWidth;
  const initialHeight = window && window.innerHeight;
  const { width, height } = useWindowDimensions();
  const [iconIndex, setIconIndex] = useState(0);
  const [iconList, setIconList] = useState([]);
  const onCreateIcon = (icon) => {
    const newX = Math.floor(Math.random() * ((width / 100) * 80 - (width / 100) * 20) + (width / 100) * 20);
    const newY = Math.floor(Math.random() * ((height / 100) * 70 - (height / 100) * 30) + (height / 100) * 30);
    setIconList([
      ...iconList,
      {
        x: newX, y: newY, src: icon, key: iconList.length + 1
      },
    ]);
  };
  return (
    <CanvasFrame>
      <CanvasTools onCreateIcon={ onCreateIcon } setIconIndex={ setIconIndex } iconIndex={ iconIndex } />
      <Stage width={ initialWidth } height={ initialHeight - 300 } ref={ canvasRef }>
        <CanvasLayer data={ data } width={ width } height={ height } initialWidth={ initialWidth } initialHeight={ initialHeight } iconList={ iconList } />
      </Stage>
    </CanvasFrame>
  );
};

export default Canvas;
