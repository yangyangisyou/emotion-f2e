import styled from 'styled-components';
import { Formik, Form, } from 'formik';
import {
  Button, FormControlLabel, Radio, RadioGroup, TextField
} from '@material-ui/core';
import { validateEdit } from '../../config/validate';
import { titleList } from '../../config/table';
import DebugFormik from '../../util/debugFormik';

const FormWrapper = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  .edit-field {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .edit-field + .edit-field {
    margin-top: 20px;
  }
  .edit-input {
    width: 500px;
  }
  .edit-radiogroup {
    display: flex;
    flex-direction: row;

  }
  /* width: 500px; */
  /* .edit-form {
    display: flex;
    flex-direction: column;
    width: 500px;
  } */
`;

const Edit = ({ initialValue, recommandImages }) => {
  return (
    <Formik
      initialValues={ initialValue }
      render={ (props) => renderForm({ ...props, recommandImages }) }
      validationSchema={ validateEdit }
      onSubmit={ onSubmit }
    />
  );
};

const renderForm = ({ submitForm, isSubmitting, recommandImages }) => {
  console.log('recommandImages ', recommandImages);
  const imageList = recommandImages.map((element) => ({ reviewImage: element.previewURL, largeImage: element.largeImageURL }));
  console.log('imageList', imageList);
  const value = 'male';
  return (
    <FormWrapper className="edit-form">
      <div className="edit-field">
        <TextField className="edit-input" name="userName" label="Your name" variant="outlined" />
      </div>
      <div className="edit-field">
        <TextField className="edit-input" name="productName" label="Your title" variant="outlined" />
      </div>
      <div className="edit-field">
        <span>Type：</span>
        <RadioGroup className="edit-radiogroup" aria-label="productType" name="productType" value={ value }>
          { titleList.map((element) => <FormControlLabel value={ element.productNo } label={ element.productName } control={ <Radio /> } />) }
        </RadioGroup>
      </div>
      <div className="edit-field" />
      <Button
        variant="contained"
        color="primary"
        disabled={ isSubmitting }
        onClick={ submitForm }
      >
        Submit
      </Button>
      {/* {isSubmitting && <LinearProgress />} */}
      <DebugFormik />
    </FormWrapper>
  );
};

const onSubmit = (values, { setSubmitting }) => {
  setTimeout(() => {
    setSubmitting(false);
    // eslint-disable-next-line no-alert
    alert(JSON.stringify(values, null, 2));
  }, 500);
};

export default Edit;
