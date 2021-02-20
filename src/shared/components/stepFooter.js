import styled from 'styled-components';
import {
  Stepper, StepLabel, Step
} from '@material-ui/core';
import { editSteps } from '../../config/table';
import { color, fontsize } from '../../config/var';
import { validateEdit } from '../../config/validate';

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
        font-size: ${fontsize.fontsize14};
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
      font-size: ${fontsize.fontsize16};
    }

  }
  .footer-button + .footer-button {
    margin-left: 20px;
  }

  @media screen and (max-width: 768px) {
    .footer-step-list {
      margin-left: 0;
      margin-right: 0;
      padding: 0;
    }
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
    return <Button onClick={ () => { router.history.push(`/edit?productId=${productId}`); } }>BACK</Button>;
  } else {
    return <></>;
  }
};

const renderRightButton = (step, stepRef, onSubmitForm, onUploadCanvas) => {
  if (step === 0) {
    return (
      <Button onClick={ () => {
        const { values } = stepRef.current;
        validateEdit.isValid(values).then((isValid) => {
          if (isValid) {
            onSubmitForm(values);
          }
        });
      } }
      >NEXT
      </Button>
    );
  } else if (step === 1) {
    return <Button onClick={ () => onUploadCanvas(stepRef) }>SUBMIT</Button>;
  } else {
    return <></>;
  }
};

const onCopyText = (text) => {
  try {
    navigator.clipboard.writeText(text);
    // const text = document.getElementById('publishLink');
    // text.select();
    // document.execCommand('Copy');
  } catch (err) {
    console.log('not copy');
  }
};

const StepFooter = ({
  activeStep, stepRef, onUploadCanvas, router, onSubmitForm, publishLink
}) => {
  const isFinished = activeStep === 2;
  if (isFinished) {
    return (
      <StepFooterWrapper>
        <Button className="footer-button" onClick={ () => onCopyText(publishLink) }>Copy your link</Button>
        <Button className="footer-button" onClick={ () => open(publishLink, '_blank') }>Go to link</Button>
      </StepFooterWrapper>
    );
  } else {
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
        { renderRightButton(activeStep, stepRef, onSubmitForm, onUploadCanvas) }
      </StepFooterWrapper>
    );
  }
};
export default StepFooter;
