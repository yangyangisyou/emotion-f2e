import styled from 'styled-components';
import { Formik, Form, } from 'formik';
import {
  Button, FormControlLabel, Radio, RadioGroup, TextField
} from '@material-ui/core';
import { validateEdit } from '../config/validate';
import { titleList } from '../config/table';
import DebugFormik from '../util/debugFormik';

const FormWrapper = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  .edit-input {
    width: 500px;
  }
  /* width: 500px; */
  /* .edit-form {
    display: flex;
    flex-direction: column;
    width: 500px;
  } */
`;

const Edit = ({ initialValue }) => {
  return (
    <Formik
      initialValues={ initialValue }
      render={ renderForm }
      validationSchema={ validateEdit }
      onSubmit={ onSubmit }
    />
  );
};

const renderForm = ({ submitForm, isSubmitting }) => {
  const value = 'male';
  return (
    <FormWrapper className="edit-form">
      <TextField className="edit-input" name="userName" label="Your name" />
      <TextField className="edit-input" name="productName" label="Your title" />
      <RadioGroup aria-label="productType" name="productType" value={ value }>
        { titleList.map((element) => <FormControlLabel value={ element.productNo } label={ element.productName } control={ <Radio /> } />) }
      </RadioGroup>
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
