import styled from 'styled-components';
import { color } from '../../config/var';

const ProductInfoWrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    padding: 5vh 10vw;
    background-color: ${color.primary};
    line-height: 40px;
    .product-title {
      font-size: 36px;
      font-weight: 600;
    }
    /* .product-subtitle {
      font-size: 28px;
      font-weight: 500;
    } */
    .product-content {
      font-size: 26px;
      font-weight: 400;
      padding: 2.5vh 10vw;

    }
    .product-canvas {
      width: 100vw;
      margin-top: 5vh;
    }
    .product-footer {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .product-button {
      border: 1px black solid;
      padding: 0 10px;
      border-radius: 10px;
      text-decoration: none;
      background-color: ${color.secondary};
      color: white;
      font-weight: 600;
    }
    @media screen and (max-width: 768px) {
      .product-footer {
        flex-direction: column;
      }
      .product-content {
        padding: 2.5vh 0;
      }
    }
`;

const ProductInfo = ({ item, canvasImage, isLoadingItem }) => {
  if (isLoadingItem) {
    return <></>;
  } else {
    const {
      productName, userName
    } = item;
    const canvasPath = `data:image/png;base64, ${canvasImage}`;
    return (
      <ProductInfoWrapper>
        <h1 className="product-title">{productName}</h1>
        <div className="product-body">
          {/* <p className="product-content">{description}</p> */}
          <img className="product-canvas" src={ canvasPath } alt="canvas" />
        </div>
        <div className="product-footer">
          <p className="product-content">This sharing designed by {userName}.</p>
          <a className="product-button" href={ canvasPath } target="_blank" download="canvas.png" rel="noreferrer">Download</a>
        </div>
      </ProductInfoWrapper>
    );
  }
};

export default ProductInfo;
