import styled from 'styled-components';

const ProductInfoWrapper = styled.div`
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: grey;
`;

const ProductInfo = ({ item, isLoadingItem }) => {
  console.log('item ', item);
  if (isLoadingItem) {
    return <></>;
  } else {
    const {
      description, productName, userName
    } = item;
    return (
      <ProductInfoWrapper>
        <h1>About</h1>
        <h2>It&apos;s {userName}, I want to share {productName} to you.</h2>
        <p>{description}</p>
      </ProductInfoWrapper>
    );
  }
};

export default ProductInfo;
