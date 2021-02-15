import styled, { keyframes } from 'styled-components';

const spinnerOne = keyframes`
  0% {
    transform: rotate(0deg);
    border-width: 10px;
  }
  50% {
    transform: rotate(180deg);
    border-width: 1px;
  }
  100% {
    transform: rotate(360deg);
    border-width: 10px;
  }
`;

const LoadingModalWrapper = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    .loading-background {
      width: 100vw;
      height: 100vh;
      opacity: 0.6;
      background-color: black;
    }
    .loading-body {
      position: absolute;
      width: 60vw;
      height: 60vh;
      background-color: white;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .spinner {
        width: 100px;
        height: 100px;
        position: relative;
        .spinner-side {
          box-sizing: border-box;
          position: absolute;
          width: 100%;
          height: 100%;
          border: 10px solid transparent;
          border-top-color: #ad60f5;
          border-radius: 50%;
          animation: ${spinnerOne} 1.2s linear infinite;
        }
      }
      .loading-text {
        font-size: 24px;
        font-weight: 600;
      }
      .spinner + .loading-text {
        margin-top: 20px;
      }
    }
`;

const LoadingModal = () => {
  return (
    <LoadingModalWrapper>
      <div className="loading-background" />
      <div className="loading-body">
        <div className="spinner">
          <div className="spinner-side" />
          <div className="spinner-side" />
        </div>
        <p className="loading-text">Loading . . .</p>
      </div>
    </LoadingModalWrapper>
  );
};

export default LoadingModal;
