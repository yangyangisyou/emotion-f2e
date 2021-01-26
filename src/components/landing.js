import styled, { keyframes } from 'styled-components';
import Button from '@material-ui/core/Button';

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
    padding-top: 80px;
    padding-left: 100px;
    background-color: lightblue;
    height: 250px;
    display: flex;
    justify-content: space-around;
    .landing-intro {
      .landing-header {
          font-size: 40px;
      }
      .landing-content {
          font-size: 24px;
          margin: 20px auto;
      }
    }
    
    .landing-attract {
      .avatar {
        width: 150px;
        height: 150px;
        box-sizing: border-box;
        border: 5px white solid;
        border-radius: 50%;
        overflow: hidden;
        box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
        transform: translatey(0px);
        animation: ${float} 4s ease-in-out infinite;
        img { width: 100%; height: auto; }
      }
    }
    
`;

const Landing = ({ imageLink }) => {
  return (
    <LandingWrapper>
      <div className="landing-intro">
        <h1 className="landing-header">Let&apos;s create design.</h1>
        <p className="landing-content">Just 3 steps make you colorful.</p>
        <Button variant="contained" color="primary">Try it</Button>
      </div>
      <div className="landing-attract">
        <div className="avatar">
          <a href="https://codepen.io/MarioDesigns/">
            <img src={ imageLink } alt="Skytsunami" />
            {/* <img src="https://news.cgtn.com/news/77416a4e3145544d326b544d354d444d3355444f31457a6333566d54/img/37d598e5a04344da81c76621ba273915/37d598e5a04344da81c76621ba273915.jpg" alt="Skytsunami" /> */}
          </a>
        </div>
      </div>
    </LandingWrapper>
  );
};

export default Landing;
