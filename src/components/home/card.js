import styled, { keyframes, css } from 'styled-components';
import catAvatar from '../../assets/image/catAvatar.png';
import defaultCard from '../../assets/image/defaultCard.jpeg';
import { fontsize } from '../../config/var';

const loading = keyframes`
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
`;

const CardWrapper = styled.li`
  width: 300px;
  margin: 2.5vh 10px;
  padding: 2.5vh 10px;
  display: flex;
  flex: auto;
  flex-grow: 0;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: space-around;
  border: grey 1px solid;
  border-radius: 10%;
  position: relative;
  overflow: hidden;
  ${(props) => props.isLoading === false && css`
  background-image: linear-gradient(rgba(255,255,255,.1), rgba(255,255,255,.1)), url(${props.picture || defaultCard});
  `}
  /* filter: brightness(40%); */
  background-size: cover;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: all .5s;
  }
  .card-header {
    display: flex;
    align-items: center;
    z-index: 10;
    .card-crapper {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      position: relative;
      overflow: hidden;
      .card-image {
        display: inline;
        margin: 0 auto;
        height: 100%;
        width: auto;
      }
    }
    .card-crapper-loading {
      width: 50px;
      height: 50px;
      -webkit-animation: ${loading} 1.4s ease infinite; 
      animation: ${loading} 1.4s ease infinite;
      background: -webkit-gradient(linear, left top, right top, color-stop(25%, rgba(190, 190, 190, 0.2)), color-stop(37%, rgba(129, 129, 129, 0.24)), color-stop(63%, rgba(190, 190, 190, 0.2)));
      background: linear-gradient(90deg, rgba(190, 190, 190, 0.2) 25%, rgba(129, 129, 129, 0.24) 37%, rgba(190, 190, 190, 0.2) 63%);
      background-size: 400% 100%;
    }
    .card-title {
      font-size: ${fontsize.fontsize30};
      font-weight: 500;
      text-overflow: ellipsis;
      width: 75%;
      white-space: nowrap;
      overflow: hidden;
      color: white;
      /* display: block; */
    }
    .card-title-loading {
      width: 200px;
      height: 20px;
      -webkit-animation: ${loading} 1.4s ease infinite; 
      animation: ${loading} 1.4s ease infinite;
      background: -webkit-gradient(linear, left top, right top, color-stop(25%, rgba(190, 190, 190, 0.2)), color-stop(37%, rgba(129, 129, 129, 0.24)), color-stop(63%, rgba(190, 190, 190, 0.2)));
      background: linear-gradient(90deg, rgba(190, 190, 190, 0.2) 25%, rgba(129, 129, 129, 0.24) 37%, rgba(190, 190, 190, 0.2) 63%);
      background-size: 400% 100%;
    }
    .card-crapper + .card-title {
      margin-left: 10px;
    }
  }

  .card-footer {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 50%;
    z-index: 10;
    .card-content {
      font-size: ${fontsize.fontsize20};
      font-weight: 500;
      white-space: normal;
      word-break: break-all;
      float: left;
      color: white;
    }
    .card-content-loading {
      height: 20px;
      -webkit-animation: ${loading} 1.4s ease infinite; 
      animation: ${loading} 1.4s ease infinite;
      background: -webkit-gradient(linear, left top, right top, color-stop(25%, rgba(190, 190, 190, 0.2)), color-stop(37%, rgba(129, 129, 129, 0.24)), color-stop(63%, rgba(190, 190, 190, 0.2)));
      background: linear-gradient(90deg, rgba(190, 190, 190, 0.2) 25%, rgba(129, 129, 129, 0.24) 37%, rgba(190, 190, 190, 0.2) 63%);
      background-size: 400% 100%;
    }
  }
`;

const Card = ({ product, isLoading, router }) => {
  const {
    productName, description, avatar, picture, productId
  } = product;
  return (
    <>
      {
          isLoading
            ? (
              <CardWrapper>
                <div className="card-header">
                  <div className="card-crapper card-crapper-loading">
                    <div className="card-image card-image-loading" />
                  </div>
                  <p className="card-title card-title-loading" />
                </div>
                <div className="card-footer">
                  <p className="card-content card-content-loading" />
                  <p className="card-content card-content-loading" />
                </div>
              </CardWrapper>
            )
            : (
              <CardWrapper picture={ picture } description={ description } isLoading={ isLoading } onClick={ () => router.history.push(`/product?productId=${productId}`) }>
                <div className="card-header">
                  <div className="card-crapper">
                    <img className="card-image" src={ avatar || catAvatar } alt="avatar" />
                  </div>
                  <p className="card-title">{productName}</p>
                </div>
                <div className="card-footer">
                  {/* <p className="card-content">{description}</p> */}
                  <p className="card-content">See more...</p>
                </div>
                <div style={ {
                  filter: 'brightness(40%)', opacity: 0.5, backgroundColor: 'black', position: 'absolute', width: '100%', height: '100%', zIndex: 0, left: 0
                } }
                />
              </CardWrapper>
            )
      }
    </>
  );
};

export default Card;
