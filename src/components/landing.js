import styled, { keyframes } from 'styled-components';
import { color, fontsize } from '../config/var';

const float = keyframes`
  0% {
    box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
    transform: translatey(0px);
  }
  50% {
    box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
    transform: translatey(-20px);
  }
  100% {
    box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
    transform: translatey(0px);
  }
`;

const LandingWrapper = styled.div`
    padding: 10vh 10vw;
    background-color: ${color.primary};
    display: flex;
    justify-content: space-around;
    font-family: 'Montserrat', sans-serif;
    .landing-intro {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .landing-header {
          font-size: ${fontsize.fontsize40};
          font-weight: 700;
      }
      .landing-content {
          font-size: ${fontsize.fontsize24};
      }
      .landing-header + .landing-content {
        margin-top: 20px;
      }
    }
    
    .landing-attract {
      .landing-image {
        width: 150px;
        height: 150px;
        box-sizing: border-box;
        border: 4px white solid;
        border-radius: 50%;
        overflow: hidden;
        box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
        transform: translatey(0px);
        animation: ${float} 4s ease-in-out infinite;
        img { 
          width: 100%; 
          height: auto; 
        }
      }
    }

    @media screen and (max-width: 768px) {
      height: auto;
      display: flex;
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
      padding: 6vh 10vw;
      .landing-intro {
        align-items: center;
      }
      .landing-intro + .landing-attract {
        margin-bottom: 50px;
      }
  }
    
`;

const Landing = ({ imageLink }) => {
  return (
    <LandingWrapper>
      <div className="landing-intro">
        <h1 className="landing-header">Showing your emotion！</h1>
        <p className="landing-content">Enjoy sharing and creative.</p>
      </div>
      <div className="landing-attract">
        <div className="landing-image">
          <img src={ imageLink } alt="Skytsunami" />
        </div>
      </div>
    </LandingWrapper>
  );
};

export default Landing;
