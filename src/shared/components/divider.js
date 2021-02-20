import styled from 'styled-components';
import { color, fontsize } from '../../config/var';

const DividerWrapper = styled.div`
    background-color: ${color.colorDark};
    width: 100vw;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .divider-title {
      color: white;
      font-size: ${fontsize.fontsize30};
      font-weight: 600;
    }
`;

const Divider = ({ title }) => {
  return (
    <DividerWrapper>
      <h2 className="divider-title">{title}</h2>
    </DividerWrapper>
  );
};

export default Divider;
