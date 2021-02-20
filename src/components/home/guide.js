import styled from 'styled-components';
import { color, fontsize } from '../../config/var';

const GuideWrapper = styled.ul`
    font-family: 'Montserrat', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    

    .guideStep {
      display: flex;
      overflow: hidden;
      .guide-block {
        position: relative;
        width: 50vw;
        height: 20vw;
        display: flex;
        justify-content: center;
        align-items: center;
        .guide-intro {
          position: absolute;
          opacity: 0;
          transition: visibility 0s, opacity 0.2s linear;
          left: 30%;
          top: 40%;
          .guide-intro-content {
            color: white;
            font-weight: bold;
            font-size: ${fontsize.fontsize24};
          }

          .guide-button {
            display: inline-block;
            border-radius: 10px;
            border: 1px white solid;
            color: white;
            font-weight: bold;
            font-size: ${fontsize.fontsize20};
            padding: 5px 10px;

            cursor: pointer;
          }

          .guide-intro-content + .guide-button {
            margin-top: 20px;
          }
        }
        &:hover > .guide-intro {
          visibility: visible;
          opacity: 1;
        }
      }
      .guide-block-title {
        background-color: ${color.primary};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: 45vw;
        padding-left: 5vw;
        .guide-title {
          font-weight: bold;
          font-size: ${fontsize.fontsize24};
        }
        .guide-content {
          font-size: ${fontsize.fontsize20};
        }
        .guide-title + .guide-content {
          margin-top: 10px;
        }
      }

      .guide-block-image {
        background-color: ${color.mutedBlue};
        .guide-background {
          display: block;
          width: 100%; 
          height: 100%;
          object-fit: cover;
          /* opacity: 0.8; */
          filter: brightness(40%);
        }
      }
    }

    .guideStep:nth-child(even) {
      flex-direction: row-reverse;
    }

    .guideStep:hover {
      width: 100vw;
      z-index: 100;
    }

    @media screen and (max-width: 768px) {
      .guideStep {
        display: flex;
        .guide-block {
          height: 50vw;
          .guide-intro {
            opacity: 1;
            transition: visibility 0s, opacity 0.2s linear;
            left: 15%;
            top: 30%;
          }
        }
        
      }
    }
`;
// https://images.pexels.com/photos/3854816/pexels-photo-3854816.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940
// https://newsapi.org/
const Guide = ({ router }) => {
  const goToCreatePage = () => router.history.push('/edit');
  return (
    <GuideWrapper>
      <li className="guideStep">
        <div className="guide-block guide-block-title" data-aos="zoom-in">
          <h4 className="guide-title">Step 1</h4>
          <p className="guide-content">Fill out your form.</p>
        </div>
        <div className="guide-block guide-block-image">
          <img className="guide-background" src="https://images.pexels.com/photos/3854816/pexels-photo-3854816.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="1" />
          <div className="guide-intro">
            <p className="guide-intro-content">Thinking and imagine.</p>
            <p className="guide-button" onClick={ goToCreatePage }>CREATE</p>
          </div>
        </div>
      </li>
      <li className="guideStep">
        <div className="guide-block guide-block-title">
          <h4 className="guide-title">Step 2</h4>
          <p className="guide-content">Design your idea.</p>
        </div>
        <div className="guide-block guide-block-image">
          <img className="guide-background" src="https://images.pexels.com/photos/542555/pexels-photo-542555.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="1" />
          <div className="guide-intro">
            <p className="guide-intro-content">Painting your creative.</p>
            <p className="guide-button" onClick={ goToCreatePage }>CREATE</p>
          </div>
        </div>
      </li>
      <li className="guideStep">
        <div className="guide-block guide-block-title">
          <h4 className="guide-title">Step 3</h4>
          <p className="guide-content">Just share it.</p>
        </div>
        <div className="guide-block guide-block-image">
          <img className="guide-background" src="https://images.pexels.com/photos/3764496/pexels-photo-3764496.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="1" />
          <div className="guide-intro">
            <p className="guide-intro-content">Sharing and enjoy.</p>
            <p className="guide-button" onClick={ goToCreatePage }>CREATE</p>
          </div>
        </div>
      </li>
    </GuideWrapper>
  );
};

export default Guide;
