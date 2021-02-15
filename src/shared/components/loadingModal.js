import styled from 'styled-components';

const LoadingModalWrapper = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1000;
    width: 100vw;
    height: 100vh;
    opacity: 0.6;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    .loading-body {
      width: 60vw;
      height: 60vh;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
    }
`;

const LoadingModal = () => {
  return (
    <LoadingModalWrapper>
      <div className="loading-body">
        test
      </div>
    </LoadingModalWrapper>
  );
};

export default LoadingModal;
