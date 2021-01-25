import styled, { keyframes } from 'styled-components';

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
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: grey 1px solid;
  border-radius: 10%;
  background-image: linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.7)), url(${(props) => props.picture});
  background-size: cover;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: all .5s;
  }
  .card-header {
    display: flex;
    align-items: center;
    /* flex-wrap: wrap; */
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
      font-size: 30px;
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
    /* width: 100%; */
    height: 50%;
    .card-content {
      font-size: 20px;
      white-space: normal;
      word-break: break-all;
      float: left;
    }
    .card-content-loading {
      height: 20px;
      /* width: 100%; */
      -webkit-animation: ${loading} 1.4s ease infinite; 
      animation: ${loading} 1.4s ease infinite;
      background: -webkit-gradient(linear, left top, right top, color-stop(25%, rgba(190, 190, 190, 0.2)), color-stop(37%, rgba(129, 129, 129, 0.24)), color-stop(63%, rgba(190, 190, 190, 0.2)));
      background: linear-gradient(90deg, rgba(190, 190, 190, 0.2) 25%, rgba(129, 129, 129, 0.24) 37%, rgba(190, 190, 190, 0.2) 63%);
      background-size: 400% 100%;
    }
  }
`;

const Card = ({ product, isLoading }) => {
  const {
    productName, description, avatar, picture
  } = product;
  console.log('product ', product);
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
              <CardWrapper picture={ picture } description={ description }>
                <div className="card-header">
                  <div className="card-crapper">
                    <img className="card-image" src={ avatar } alt="avatar" />
                  </div>
                  <p className="card-title">{productName}</p>
                </div>
                <div className="card-footer">
                  <p className="card-content">{description}</p>
                </div>
              </CardWrapper>
            )
      }
    </>
  );
};

export default Card;
