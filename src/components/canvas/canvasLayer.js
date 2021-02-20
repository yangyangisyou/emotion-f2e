import React, { useState } from 'react';
import { Layer, Text, Rect } from 'react-konva';
import useWindowDimensions from '../../util/useWindowDimensions';
import BackgroundImage from '../../shared/components/backgroundImage';

const Canvas = ({ data, initialWidth, iconList }) => {
  const { width, height } = useWindowDimensions();
  const {
    productName, description, picture, userName
  } = data;
  const [productNameCoord, setProductNameCoord] = useState({
    x: (width / 100) * 24,
    y: (height / 100) * 15,
    isDragging: false,
  });
  const [descriptionCoord, setDescriptionCoord] = useState({
    x: (width / 100) * 24,
    y: (height / 100) * 20,
    isDragging: false,
  });
  const [userCoord, setUserCoord] = useState({
    x: (width / 100) * 70,
    y: (height / 100) * 45,
    isDragging: false,
  });

  return (
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
      { iconList.map((element) => {
        return <Text text={ element.src } x={ element.x } y={ element.y } fontSize={ 40 } draggable />;
      }) }
      <Text
        text={ productName }
        fontSize={ 30 }
        x={ productNameCoord.x }
        y={ productNameCoord.y }
        width={ (width / 100) * 50 }
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
        width={ (width / 100) * 50 }
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
      <Text
        text={ userName }
        fontSize={ 24 }
        x={ userCoord.x }
        y={ userCoord.y }
        width={ (width / 100) * 50 }
        draggable
        onDragStart={ () => setUserCoord({ ...userCoord, isDragging: true }) }
        onDragEnd={ (element) => {
          setUserCoord({
            x: element.target.x(),
            y: element.target.y(),
            isDragging: false,
          });
        } }
      />
    </Layer>
  );
};

export default Canvas;
