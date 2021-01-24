import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
`;

const CardWrapper = styled.div`
  width: 200px;
  height: 150px;
  .card-header {
      font-size: 30px;
  }
  .card-header-loading {
    -webkit-animation: ${loading} 1.4s ease infinite; 
    animation: ${loading} 1.4s ease infinite;
    background: -webkit-gradient(linear, left top, right top, color-stop(25%, rgba(190, 190, 190, 0.2)), color-stop(37%, rgba(129, 129, 129, 0.24)), color-stop(63%, rgba(190, 190, 190, 0.2)));
    background: linear-gradient(90deg, rgba(190, 190, 190, 0.2) 25%, rgba(129, 129, 129, 0.24) 37%, rgba(190, 190, 190, 0.2) 63%);
    background-size: 400% 100%;
  }
`;

// const CardLoading = keyframes`
// -webkit-animation: ant-skeleton-loading 1.4s ease infinite;
//         animation: ant-skeleton-loading 1.4s ease infinite;
//   0% {
//     background-position: 100% 50%;
//   }
//   100% {
//     background-position: 0 50%;
//   }
// `;

// const CardWrapper =

const Card = () => {
  const isLoading = false;

  return (
    <>
      {
          isLoading
            ? (
              <CardWrapper>
                <p className="card-header card-header-loading" />
                <p className="card-content card-content-loading" />
              </CardWrapper>
            )
            : (
              <CardWrapper>
                <p className="card-header">test</p>
                <p className="card-content">text</p>
              </CardWrapper>
            )
      }
    </>
  );
};

export default Card;
