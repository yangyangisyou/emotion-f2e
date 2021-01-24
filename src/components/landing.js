import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const LandingWrapper = styled.div`
    padding-top: 80px;
    padding-left: 100px;
    background-color: lightblue;
    height: 250px;
    .landing-header {
        font-size: 40px;
    }
    .landing-content {
        font-size: 24px;
        margin: 20px auto;
    }
`;

const Landing = () => {
  return (
    <LandingWrapper>
      <h1 className="landing-header">Let&apos;s create design.</h1>
      <p className="landing-content">Just 3 steps make you colorful.</p>
      <Button variant="contained" color="primary">Try it</Button>
    </LandingWrapper>
  );
};

export default Landing;
