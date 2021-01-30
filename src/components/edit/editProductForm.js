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
  padding: 20px;
  .edit-field {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 80%;
  }
  .edit-field-image {
    width: 80%;
    flex-direction: column;
      align-items: flex-start;
  }

  .edit-field-tag {
    width: 80%;
    flex-direction: column;
      align-items: flex-start;
  }
  
  .edit-field + .edit-field {
    margin-top: 20px;
  }

  .edit-radiogroup {
    display: flex;
    flex-direction: row;

  }

  @media screen and (max-width: 768px) {
    .edit-field {
      width: 100%;
    }

    .edit-field-tag {
      width: 100%;
    }

    .edit-field-image {
      width: 100%;
    }
  }
`;

const Edit = ({
  initialValue, recommandImages, onSearchRecommendImage, loadingRecommandImages, onSubmitForm
}) => {
  return (
    <Formik
      initialValues={ initialValue }
      render={ (props) => renderForm({
        ...props, recommandImages, onSearchRecommendImage, loadingRecommandImages
      }) }
      validationSchema={ validateEdit }
      onSubmit={ onSubmitForm }
      enableReinitialize
    />
  );
};

const renderForm = ({
  isSubmitting, recommandImages, onSearchRecommendImage, loadingRecommandImages, values, setFieldValue, submitForm, touched, errors
}) => {
  const imageList = recommandImages.map((element) => ({ reviewImage: element.previewURL, largeImage: element.largeImageURL }));
  return (
    <FormWrapper className="edit-form">
      <div className="edit-field">
        <span className="edit-type">Nickname：</span>
        <TextField
          className="edit-input"
          label="Your name"
          variant="outlined"
          id="userName"
          name="userName"
          value={ values.userName }
          error={ touched.userName && Boolean(errors.userName) }
          helperText={ touched.userName ? errors.userName : '' }
          onChange={ (element) => setFieldValue('userName', element.target.value) }
        />
      </div>
      <div className="edit-field">
        <span className="edit-type">Title：</span>
        <TextField
          className="edit-input"
          label="Your title"
          name="productName"
          variant="outlined"
          value={ values.productName }
          error={ touched.productName && Boolean(errors.productName) }
          helperText={ touched.productName ? errors.productName : '' }
          onChange={ (element) => setFieldValue('productName', element.target.value) }
        />
      </div>
      <div className="edit-field">
        <span className="edit-type">Type：</span>
        <RadioGroup
          className="edit-radiogroup"
          name="productType"
          aria-label="productType"
          error={ touched.productType && Boolean(errors.productType) }
          helperText={ touched.productType ? errors.productType : '' }
          onChange={ (element) => {
            const value = element.target.value;
            setFieldValue('productType', value);
            if (value !== '99999') { onSearchRecommendImage(largeCatTable[value]); }
          }
        }
        >
          { titleList.map((element) => <FormControlLabel value={ element.productNo } label={ element.productName } control={ <Radio /> } />) }
        </RadioGroup>
      </div>
      {
          console.log('values.productType   ', values.productType)
        }
      {
        values.productType !== null
          ? (
            <>
              {
                values.productType === '99999'
                  ? (
                    <div className="edit-field edit-field-tag">
                      <span className="edit-type">Your custom tag：</span>
                      <TextField
                        className="edit-input"
                        label="Other tag"
                        name="selectedTag"
                        variant="outlined"
                        onBlur={ (element) => { setFieldValue('selectedTag', element.target.value); values.selectedTag && onSearchRecommendImage(element.target.value); } }
                      />
                      {
                        values.selectedTag && (
                        <div className="edit-field edit-field-image">
                          <p className="edit-type">Recommend image：</p>
                          <ImageCardList
                            imageList={ imageList }
                            selectedNo={ values.selectedImageNo }
                            isLoading={ loadingRecommandImages }
                            onSelect={ (imageNo, imageLink) => { setFieldValue('selectedImage', imageLink); setFieldValue('selectedImageNo', imageNo); } }
                          />
                        </div>
                        )
                      }
                    </div>
                  ) : (
                    <>
                      <div className="edit-field edit-field-tag">
                        <span className="edit-type">Choose more specific tag：</span>
                        <TagList
                          categoryNo={ values.productType }
                          selectedNo={ values.selectedTagNo }
                          onSelect={ (tagNo, tagName) => { setFieldValue('selectedTagNo', tagNo); setFieldValue('selectedTag', tagName); onSearchRecommendImage(tagName); } }
                        />
                      </div>
                      <div className="edit-field edit-field-image">
                        <p className="edit-type">Recommend image：</p>
                        <ImageCardList
                          imageList={ imageList }
                          selectedNo={ values.selectedImageNo }
                          isLoading={ loadingRecommandImages }
                          onSelect={ (imageNo, imageLink) => { setFieldValue('selectedImage', imageLink); setFieldValue('selectedImageNo', imageNo); } }
                        />
                      </div>
                    </>
                  )
              }

            </>
          ) : <></>
      }
      <Dialog
        open={ false }
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
        // onClick={ () => setIsSubmit(true) }
        onClick={ submitForm }
      >
        Submit
      </Button>
      {/* {isSubmitting && <LinearProgress />} */}
      <DebugFormik />
    </FormWrapper>
  );
};

export default Edit;
