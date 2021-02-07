import { Image } from 'react-konva';
import useImage from 'use-image';

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

export default URLImage;
