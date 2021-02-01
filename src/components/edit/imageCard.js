import styled, { keyframes, css } from 'styled-components';

const loading = keyframes`
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
`;

const CardWrapper = styled.li`
  width: 250px;
  height: 150px;
  margin: 10px;
  display: flex;
  flex: auto;
  flex-grow: 0;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: space-around;
  border: grey 1px solid;
  border-radius: 10%;
  background-image: linear-gradient(rgba(255,255,255,${(props) => (props.selected ? 0 : 0.5)}), rgba(255,255,255,${(props) => (props.selected ? 0 : 0.5)})), url(${(props) => props.picture});
  background-size: cover;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: all .5s;
  }

  ${(props) => props.isLoading && css`
    -webkit-animation: ${loading} 1.4s ease infinite; 
    animation: ${loading} 1.4s ease infinite;
    background: -webkit-gradient(linear, left top, right top, color-stop(25%, rgba(190, 190, 190, 0.2)), color-stop(37%, rgba(129, 129, 129, 0.24)), color-stop(63%, rgba(190, 190, 190, 0.2)));
    background: linear-gradient(90deg, rgba(190, 190, 190, 0.2) 25%, rgba(129, 129, 129, 0.24) 37%, rgba(190, 190, 190, 0.2) 63%);
    background-size: 400% 100%;
    `}
`;

const Card = ({
  images, selected, onSelect, isLoading
}) => {
  const { reviewImage } = images;
  return (
    <>
      {
          isLoading
            ? (
              <CardWrapper isLoading={ isLoading } className={ isLoading ? 'card-loading' : null } />
            )
            : (
              <CardWrapper isLoading={ isLoading } picture={ reviewImage } selected={ selected } onClick={ onSelect } />
            )
      }
    </>
  );
};

export default Card;
