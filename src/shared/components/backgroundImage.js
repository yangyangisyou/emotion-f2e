import { Image } from 'react-konva';
import useImage from 'use-image';

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

export default BackgroundImage;
