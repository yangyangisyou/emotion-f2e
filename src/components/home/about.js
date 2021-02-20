import { useEffect } from 'react';
import styled from 'styled-components';
import image from '../../assets/image/cool.png';
import { fontsize } from '../../config/var';

const Background = styled.div`
    background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
    height: 100vh;
    width: 100vw;
    position: relative;
    overflow: hidden;
    .about-title {
        position: absolute;
        top: 7%;
        left: 35%;
        font-weight: 500;
        font-size: ${fontsize.fontsize30};
    }
    .about-guide {
        position: absolute;
        height: 100px;
        top: 2.5%;
        left: 20%;
    }
    @media screen and (max-width: 768px) {
        .about-title {
            top: 20%;
            left: 10%;
        }
        .about-guide {
            top: 2.5%;
            left: 35%;
        }
    }
`;

const movePath = {
  curviness: 1.25,
  autoRotate: true,
  values: [
    { x: 160, y: 50 },
    // { x: 110, y: 200 },
    // { x: 230, y: 300 },
    { x: 80, y: 500 },
    { x: 200, y: window && window.innerHeight },
    // { x: 600, y: 100 },
    // { x: 800, y: 0 },
    // { x: 0, y: -250 },
  ]
};

const About = () => {
  useEffect(() => {
    const tween = new TimelineLite();
    tween.add(
      TweenLite.to('.about-guide', 1, {
        bezier: movePath,
        ease: Power1.easeInOut,
      })
    );

    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
      triggerElement: '.about-animation',
      duration: 2000,
      triggerHook: 0,
    }).setTween(tween).addIndicators().setPin('.about-animation')
      .addTo(controller);
  }, []);
  return (
    <Background id="about-animation" className="about-animation">
      <p className="about-title">Follow me, I tell you more.</p>
      <img className="about-guide" src={ image } alt="img" />
    </Background>
  );
};
export default About;
