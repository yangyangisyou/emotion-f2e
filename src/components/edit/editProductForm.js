import styled from 'styled-components';
import { Formik, Form } from 'formik';
import {
  FormControlLabel, Radio, RadioGroup, TextField, Dialog, TextareaAutosize
} from '@material-ui/core';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { catList, largeCatTable, CATEGORIES } from '../../config/table';
import ImageCardList from './imageCardList';
import { validateEdit } from '../../config/validate';
import TagList from './tagList';
// import FormikDebugTool from '../../util/formikDebugTool';

const FormWrapper = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 25px;
  .edit-field {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 400px;
  }

  .edit-type {
    white-space: nowrap;
  }

  .edit-input {
    width: 100%;
  }

  .edit-field-newline {
    flex-direction: column;
    align-items: flex-start;
    .edit-input {
      margin: 10px 0;
    }
  }

  .edit-field-submit {
    justify-content: center;
    margin-bottom: 100px;
  }

  .edit-field + .edit-field {
    margin-top: 20px;
  }

  .edit-input-radiogroup {
    display: flex;
    flex-direction: row;
  }

  .edit-error {
    color: #f44336;
    font-size: 0.75rem;
  }

  @media screen and (max-width: 768px) {
    .edit-field {
      width: 90vw;
    }

    .edit-field-newline {
      width: 90vw;
    }
  }
`;

const Edit = ({
  initialValue, recommandImages, onSearchRecommendImage, loadingRecommandImages, onSubmitForm, editRef
}) => {
  return (
    <Formik
      innerRef={ editRef }
      // ref={ (e) => { editRef.current = e; } }
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
  recommandImages, onSearchRecommendImage, loadingRecommandImages, values, setFieldValue, touched, errors
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
      <div className="edit-field edit-field-newline">
        <span className="edit-type">Description：<span className="edit-error">{touched.description ? errors.description : ''}</span></span>
        <TextareaAutosize
          className="edit-input"
          id="description"
          name="description"
          value={ values.description }
          aria-label="Description"
          placeholder="Describe your share"
          rowsMin={ 6 }
          error={ touched.description && Boolean(errors.description) }
          helperText={ touched.description ? errors.description : '' }
          onChange={ (element) => setFieldValue('description', element.target.value) }
        />
      </div>
      <div className="edit-field edit-field-newline">
        <span className="edit-type">Type：<span className="edit-error">{touched.selectedImage ? errors.selectedImage : ''}</span></span>
        <RadioGroup
          className="edit-input edit-input-radiogroup"
          name="productType"
          aria-label="productType"
          error={ touched.productType && Boolean(errors.productType) }
          helperText={ touched.productType ? errors.productType : '' }
          onChange={ (element) => {
            const value = element.target.value;
            setFieldValue('productType', value);
            if (value !== CATEGORIES.OTHER) { onSearchRecommendImage(largeCatTable[value]); }
          }
        }
        >
          { catList.map((element) => <FormControlLabel value={ element.productNo } label={ element.productName } control={ <Radio /> } />) }
        </RadioGroup>
      </div>
      {
        values.productType !== null
          ? (
            <>
              {
                values.productType === CATEGORIES.OTHER
                  ? (
                    <>
                      <div className="edit-field">
                        <span className="edit-type">Custom tag：</span>
                        <TextField
                          className="edit-input"
                          label="Other tag"
                          name="selectedTag"
                          variant="outlined"
                          onBlur={ (element) => {
                            const value = element.target.value;
                            setFieldValue('selectedTag', value);
                            value && onSearchRecommendImage(value);
                          } }
                        />
                      </div>
                      {
                      values.selectedTag ? (
                        <div className="edit-field edit-field-newline">
                          <p className="edit-type">Recommend image：</p>
                          <ImageCardList
                            className="edit-input"
                            imageList={ imageList }
                            selectedNo={ values.selectedImageNo }
                            isLoading={ loadingRecommandImages }
                            onSelect={ (imageNo, imageLink) => { setFieldValue('selectedImage', imageLink); setFieldValue('selectedImageNo', imageNo); } }
                          />
                        </div>
                      ) : <></>
                    }
                    </>
                  ) : (
                    <>
                      <div className="edit-field edit-field-newline">
                        <span className="edit-type">Choose more specific tag：</span>
                        <TagList
                          className="edit-input"
                          categoryNo={ values.productType }
                          selectedNo={ values.selectedTagNo }
                          onSelect={ (tagNo, tagName) => { setFieldValue('selectedTagNo', tagNo); setFieldValue('selectedTag', tagName); onSearchRecommendImage(tagName); } }
                        />
                      </div>
                      <div className="edit-field edit-field-newline">
                        <p className="edit-type">Recommend image：</p>
                        <ImageCardList
                          className="edit-input"
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
      {/* <div className="edit-field edit-field-submit">
        <Button
          variant="contained"
          color="primary"
          disabled={ isSubmitting }
        // onClick={ () => setIsSubmit(true) }
          onClick={ submitForm }
        >
          Submit
        </Button>
      </div> */}
      {/* {isSubmitting && <LinearProgress />} */}
      {/* <FormikDebugTool /> */}
    </FormWrapper>
  );
};

export default Edit;
