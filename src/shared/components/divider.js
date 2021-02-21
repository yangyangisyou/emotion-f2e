import styled from 'styled-components';
import { fontsize } from '../../config/var';
import arrowImage from '../../assets/image/arrow.gif';

const DividerWrapper = styled.div`
    background-color: black;
    width: 100vw;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .divider-title {
      color: white;
      font-size: ${fontsize.fontsize28};
      font-weight: 600;
      margin: auto 5vw;
    }
    .divider-arrow {
      height: 100%;
      transform: rotate(180deg);
    }
`;

const Divider = ({ title }) => {
  return (
    <DividerWrapper>
      <h2 className="divider-title">{title}</h2>
      <img className="divider-arrow" src={ arrowImage } alt="arrow" />
    </DividerWrapper>
  );
};

export default Divider;
