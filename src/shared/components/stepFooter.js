import styled from 'styled-components';
import {
  Stepper, StepLabel, Step
} from '@material-ui/core';
import { editSteps } from '../../config/table';
import { color } from '../../config/var';

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

  .footer-step-list {
    width: 60vw;
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

const Button = styled.div`
  padding: 10px 15px;
  border-radius: 15px;
  background-color: ${color.colorDark};
  color: white;
  font-weight: bold;
  cursor: pointer;
`;

const renderLeftButton = (step, router) => {
  const productId = router.query.productId;
  if (step === 1) {
    return <Button onClick={ () => { router.history.push(`/edit?productId=${productId}`); } }>Back</Button>;
  } else if (step === 2) {
    return <Button onClick={ () => { router.history.push(`/canvas?productId=${productId}`); } }>Back</Button>;
  } else {
    return <></>;
  }
};

const renderRightButton = (step, stepRef, onUploadCanvas) => {
  if (step === 0) {
    return (
      <Button onClick={ () => {
        const { values } = stepRef.current;
        onSubmitForm(values);
      } }
      >SUBMIT
      </Button>
    );
  } else if (step === 1) {
    return <Button onClick={ () => onUploadCanvas(stepRef) }>SUBMIT</Button>;
  } else {
    return <></>;
  }
};

const StepFooter = ({
  activeStep, stepRef, onUploadCanvas, router
}) => {
  return (
    <StepFooterWrapper>
      { renderLeftButton(activeStep, router) }
      <Stepper className="footer-step-list" activeStep={ activeStep }>
        {editSteps.map((label) => {
          return (
            <Step key={ label }>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      { renderRightButton(activeStep, stepRef, onUploadCanvas) }
    </StepFooterWrapper>
  );
};
export default StepFooter;
