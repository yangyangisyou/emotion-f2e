import React, { useState } from 'react';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import {
  Button, FormControlLabel, Radio, RadioGroup, TextField, Dialog
} from '@material-ui/core';
// import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
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
  .edit-field-image {
    width: 80%;
  }

  .edit-field-tag {
    width: 80%;
  }
  
  .edit-field + .edit-field {
    margin-top: 20px;
  }

  .edit-radiogroup {
    display: flex;
    flex-direction: row;

  }

  @media screen and (max-width: 768px) {
    padding: 20px;

    .edit-field {
      width: 100%;
    }

    .edit-field-tag {
      width: 100%;
      flex-direction: column;
      align-items: flex-start;
    }

    .edit-field-image {
      width: 100%;
      flex-direction: column;
      align-items: flex-start;
    }
  }
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
  isSubmitting, recommandImages, onSearchRecommendImage, loadingRecommandImages, values, setFieldValue// , submitForm
}) => {
  const imageList = recommandImages.map((element) => ({ reviewImage: element.previewURL, largeImage: element.largeImageURL }));
  const [issubmit, setIsSubmit] = useState(false);
  return (
    <FormWrapper className="edit-form">
      <div className="edit-field">
        <span className="edit-type">Nickname：</span>
        <TextField className="edit-input" name="userName" label="Your name" variant="outlined" onChange={ (element) => setFieldValue('userName', element.target.value) } />
      </div>
      <div className="edit-field">
        <span className="edit-type">Title：</span>
        <TextField className="edit-input" name="productName" label="Your title" variant="outlined" onChange={ (element) => setFieldValue('productName', element.target.value) } />
      </div>
      <div className="edit-field">
        <span className="edit-type">Type：</span>
        <RadioGroup className="edit-radiogroup" name="productType" aria-label="productType" onChange={ (element) => { setFieldValue('productType', element.target.value); onSearchRecommendImage(largeCatTable[element.target.value]); } }>
          { titleList.map((element) => <FormControlLabel value={ element.productNo } label={ element.productName } control={ <Radio /> } />) }
        </RadioGroup>
      </div>

      {
        values.productType !== null
          ? (
            <>
              <div className="edit-field edit-field-tag">
                <span className="edit-type">Choose more specific tag：</span>
                <TagList categoryNo={ values.productType } selectedNo={ values.selectedTagNo } onSelect={ (tagNo, tagName) => { setFieldValue('selectedTagNo', tagNo); setFieldValue('selectedTag', tagName); onSearchRecommendImage(tagName); } } />
              </div>
              <div className="edit-field edit-field-image">
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
      <Dialog
        open={ issubmit }
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">哩五炭即某</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <img src="https://p2.bahamut.com.tw/HOME/creationCover/29/0004566029_B.JPG" alt="" />
            <iframe title="yt" width="560" height="315" src="https://www.youtube.com/embed/7R97mYB1Oog" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </DialogContentText>
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={ handleClose } color="primary">
            Disagree
          </Button>
          <Button onClick={ handleClose } color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions> */}
      </Dialog>
      <Button
        variant="contained"
        color="primary"
        disabled={ isSubmitting }
        onClick={ () => setIsSubmit(true) }
        // onClick={ submitForm }
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
