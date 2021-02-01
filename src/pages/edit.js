import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { loadProductImage } from '../actions/asset';
// import { createProduct } from '../actions/product';
import EditProductForm from '../components/edit/editProductForm';
import Navbar from '../shared/components/Navbar';
import StepFooter from '../shared/components/stepFooter';

const EditWrapper = styled.div`
`;

const Edit = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const recommandImages = useSelector((state) => state.asset.recommandImages);
  const loadingRecommandImages = useSelector((state) => state.asset.loadingRecommandImages);
  const onSearchRecommendImage = (keywords) => {
    dispatch(loadProductImage(keywords));
  };

  const onSubmitForm = (values, { setSubmitting }) => {
    console.log('values ', values);
    const {
      userName, productName, productType, selectedImage, selectedTag, description
    } = values;
    const payload = {
      userName: userName,
      productName: productName,
      description: description,
      productType: productType,
      tag: selectedTag,
      picture: selectedImage,
    };
    localStorage.setItem('editStorage', JSON.stringify(payload));
    console.log('payload ', payload);
    // dispatch(createProduct);
    // setTimeout(() => {
    //   // eslint-disable-next-line no-alert
    //   alert(JSON.stringify(values, null, 2));
    // }, 500);

    history.push('/canvas');
    setSubmitting(false);
  };

  const initialValue = {
    productName: '',
    userName: '',
    avatar: '',
    description: '',
    picture: '',
    productType: null,
    selectedImageNo: null,
    selectedImage: null,
    selectedTagNo: null,
    selectedTag: null,
    email: '',
    password: '',
  };

  return (
    <EditWrapper>
      <Navbar />
      <EditProductForm initialValue={ initialValue } recommandImages={ recommandImages } onSearchRecommendImage={ onSearchRecommendImage } loadingRecommandImages={ loadingRecommandImages } onSubmitForm={ onSubmitForm } />
      <StepFooter activeStep={ 0 } />
    </EditWrapper>
  );
};

export default Edit;
