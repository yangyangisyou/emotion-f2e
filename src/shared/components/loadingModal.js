import styled, { keyframes } from 'styled-components';
import { fontsize } from '../../config/var';
import loadingImage from '../../assets/image/loading.gif';
import errorImage from '../../assets/image/engineerDoge.gif';
import useRouter from '../../util/useRouter';
import Button from './button';

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
      overflow: hidden;
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
        /* width: 100px;
        height: 100px; */
        position: relative;
        /* .spinner-side {
          box-sizing: border-box;
          position: absolute;
          width: 100%;
          height: 100%;
          border: 10px solid transparent;
          border-top-color: #ad60f5;
          border-radius: 50%;
          animation: ${spinnerOne} 1.2s linear infinite;
        } */
        .spinner-image {
          height: 300px;
        }
      }
      .loading-text {
        font-size: ${fontsize.fontsize24};
        font-weight: 600;
        margin: 10px auto;
      }
      .spinner + .loading-text {
        margin-top: 20px;
      }
    }

    .loading-footer {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    @media screen and (max-width: 768px) {
      .loading-body {
        width: 80vw;
        height: 60vh;
        padding: 5vw;
      }
    }
`;

const LoadingModal = ({ isError }) => {
  const router = useRouter();
  const text = isError ? 'Uh oh, This canvas might not exist.' : 'Wait a minute . . .';
  return (
    <LoadingModalWrapper>
      <div className="loading-background" />
      <div className="loading-body">
        <div className="spinner">
          <img className="spinner-image" src={ isError ? errorImage : loadingImage } alt="loading" />
          {/* <div className="spinner-side" />
          <div className="spinner-side" /> */}
        </div>
        <div className="loading-footer">
          <p className="loading-text">{text}</p>
          <Button onClick={ () => router.history.push('/') }>BACK TO HOME</Button>
        </div>
      </div>
    </LoadingModalWrapper>
  );
};

export default LoadingModal;
