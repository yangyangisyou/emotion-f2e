import styled from 'styled-components';
import { color } from '../../config/var';

const ButtonWrapper = styled.div`
  display: inline-block;
  padding: 10px 15px;
  border-radius: 15px;
  background-color: ${color.colorDark};
  color: white;
  font-weight: bold;
  cursor: pointer;
`;

const Button = (props) => {
  return <ButtonWrapper { ...props }>{props.children}</ButtonWrapper>;
};
export default Button;
