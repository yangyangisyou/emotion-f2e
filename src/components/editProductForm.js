import styled from 'styled-components';
import { TextField } from 'formik-material-ui';
import { Formik, Form, Field } from 'formik';
import { Button, LinearProgress } from '@material-ui/core';
import { validateEdit } from '../config/validate';

const EditWrapper = styled.div`
`;

const Edit = ({ initialValue }) => {
  return (
    <EditWrapper>
      <Formik
        initialValues={ initialValue }
        render={ renderForm }
        validationSchema={ validateEdit }
        onSubmit={ onSubmit }
      />
    </EditWrapper>
  );
};

const renderForm = ({ submitForm, isSubmitting }) => (
  <Form>
    <Field
      component={ TextField }
      name="email"
      type="email"
      label="Email"
    />
    <br />
    <Field
      component={ TextField }
      type="password"
      label="Password"
      name="password"
    />
    {isSubmitting && <LinearProgress />}
    <br />
    <Button
      variant="contained"
      color="primary"
      disabled={ isSubmitting }
      onClick={ submitForm }
    >
      Submit
    </Button>
  </Form>
);

const onSubmit = (values, { setSubmitting }) => {
  setTimeout(() => {
    setSubmitting(false);
    // eslint-disable-next-line no-alert
    alert(JSON.stringify(values, null, 2));
  }, 500);
};

export default Edit;
