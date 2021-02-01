import styled from 'styled-components';
import {
  Stepper, StepLabel, Step
} from '@material-ui/core';
import { editSteps } from '../../config/table';

const StepFooterWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px; 
  border-top: 1px solid #eee;
  bottom: 0px;
  width: 100vw;
  background-color: white;
  .footer-step-route {

  }
  .footer-step-list {
    width: 80vw;
    margin-left: 30px;
    margin-right: 30px;
    .header-link {
      list-style: none;
      float: left;
      margin-right: 30px;
      a {
        font-weight: 700;
        color: #333;
        font-size: 14px;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
      a:hover {
        color: #000;
        cursor: pointer;
      }
    }

    .header-link-home > a {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 768px) {
  }
`;

const StepFooter = ({ activeStep }) => {
  return (
    <StepFooterWrapper>
      <Stepper className="footer-step-list" activeStep={ activeStep }>
        {editSteps.map((label) => {
          return (
            <Step key={ label }>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </StepFooterWrapper>
  );
};
export default StepFooter;
