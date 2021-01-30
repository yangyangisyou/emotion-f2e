import styled from 'styled-components';
import { Formik, Form, } from 'formik';
import {
  Button, FormControlLabel, Radio, RadioGroup, TextField
} from '@material-ui/core';
import { validateEdit } from '../../config/validate';
import { titleList, largeCatTable } from '../../config/table';
import DebugFormik from '../../util/debugFormik';
import ImageCardList from './imageCardList';
import TagList from './tagList';

const FormWrapper = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  .edit-field {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 80%;
  }
  .image-field {
    width: 80%;
  }
  .edit-field + .edit-field {
    margin-top: 20px;
  }
  .edit-input {
    /* width: 500px; */
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

const Edit = ({
  initialValue, recommandImages, onSearchRecommendImage, loadingRecommandImages
}) => {
  return (
    <Formik
      initialValues={ initialValue }
      render={ (props) => renderForm({
        ...props, recommandImages, onSearchRecommendImage, loadingRecommandImages
      }) }
      validationSchema={ validateEdit }
      onSubmit={ onSubmit }
      enableReinitialize
    />
  );
};

const renderForm = ({
  submitForm, isSubmitting, recommandImages, onSearchRecommendImage, loadingRecommandImages, values, setFieldValue
}) => {
  const imageList = recommandImages.map((element) => ({ reviewImage: element.previewURL, largeImage: element.largeImageURL }));
  console.log('loadingRecommandImages ---', loadingRecommandImages);
  return (
    <FormWrapper className="edit-form">
      <div className="edit-field">
        <span>Nickname：</span>
        <TextField className="edit-input" name="userName" label="Your name" variant="outlined" onChange={ (element) => setFieldValue('userName', element.target.value) } />
      </div>
      <div className="edit-field">
        <span>Title：</span>
        <TextField className="edit-input" name="productName" label="Your title" variant="outlined" onChange={ (element) => setFieldValue('productName', element.target.value) } />
      </div>
      <div className="edit-field">
        <span>Type：</span>
        <RadioGroup className="edit-radiogroup" name="productType" aria-label="productType" onChange={ (element) => { setFieldValue('productType', element.target.value); onSearchRecommendImage(largeCatTable[element.target.value]); } }>
          { titleList.map((element) => <FormControlLabel value={ element.productNo } label={ element.productName } control={ <Radio /> } />) }
        </RadioGroup>
      </div>

      {
        values.productType !== null
          ? (
            <>
              <div className="edit-field">
                <span>Choose more specific tag：</span>
                <TagList categoryNo={ values.productType } selectedNo={ values.selectedTagNo } onSelect={ (tagNo, tagName) => { setFieldValue('selectedTagNo', tagNo); setFieldValue('selectedTag', tagName); onSearchRecommendImage(tagName); } } />
              </div>
              <div className="image-field">
                <p>Recommend image：</p>
                <ImageCardList
                  imageList={ imageList }
                  selectedNo={ values.selectedImageNo }
                  isLoading={ loadingRecommandImages }
                  onSelect={ (imageNo, imageLink) => { setFieldValue('selectedImage', imageLink); setFieldValue('selectedImageNo', imageNo); } }
                />
              </div>
            </>
          ) : <></>
      }

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
