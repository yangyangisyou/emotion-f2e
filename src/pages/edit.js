import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { loadProductImage } from '../actions/asset';
// import { createProduct } from '../actions/product';
import EditProductForm from '../components/edit/editProductForm';
import Navbar from '../shared/components/Navbar';

const EditWrapper = styled.div`
`;

const Edit = () => {
  const dispatch = useDispatch();
  const recommandImages = useSelector((state) => state.asset.recommandImages);
  const loadingRecommandImages = useSelector((state) => state.asset.loadingRecommandImages);
  const onSearchRecommendImage = (keywords) => {
    dispatch(loadProductImage(keywords));
  };

  const onSubmitForm = (values, { setSubmitting }) => {
    console.log('values ', values);
    const {
      userName, productName, productType, selectedImage, selectedTag
    } = values;
    const payload = {
      userName: userName,
      productName: productName,
      productType: productType,
      selectedTag: selectedTag,
      selectedImage: selectedImage,
    };
    console.log('payload ', payload);
    // dispatch(createProduct);
    setTimeout(() => {
      // eslint-disable-next-line no-alert
      alert(JSON.stringify(values, null, 2));
    }, 500);

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
    </EditWrapper>
  );
};

export default Edit;
