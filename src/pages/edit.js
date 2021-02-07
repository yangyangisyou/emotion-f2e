import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { loadProductImage } from '../actions/asset';
import { createProduct } from '../actions/product';
import EditProductForm from '../components/edit/editProductForm';
import Navbar from '../shared/components/Navbar';
import StepFooter from '../shared/components/stepFooter';
import useRouter from '../util/useRouter';

const EditWrapper = styled.div`
`;

const Edit = () => {
  const router = useRouter();
  const history = useHistory();
  const dispatch = useDispatch();
  const editRef = useRef(null);
  const recommandImages = useSelector((state) => state.asset.recommandImages);
  const loadingRecommandImages = useSelector((state) => state.asset.loadingRecommandImages);
  const onSearchRecommendImage = (keywords) => {
    dispatch(loadProductImage(keywords));
  };

  const onSubmitForm = async (values) => {
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
    const result = await new Promise((resolve) => resolve(dispatch(createProduct(payload))));
    if (result.payload && result.payload.success) {
      const productId = result.payload && result.payload.productId;
      localStorage.setItem('editStorage', JSON.stringify(payload));
      history.push(`/canvas${productId ? `?productId=${productId}` : ''}`);
    }
  };

  const initialValue = {
    productName: '',
    userName: '',
    avatar: '',
    description: '',
    picture: '',
    productType: null,
    selectedImageNo: null,
    selectedImage: '',
    selectedTagNo: null,
    selectedTag: null,
  };
  return (
    <EditWrapper>
      <Navbar />
      <EditProductForm
        initialValue={ initialValue }
        recommandImages={ recommandImages }
        onSearchRecommendImage={ onSearchRecommendImage }
        loadingRecommandImages={ loadingRecommandImages }
        onSubmitForm={ onSubmitForm }
        editRef={ editRef }
      />
      <StepFooter activeStep={ 0 } stepRef={ editRef } onSubmitForm={ onSubmitForm } router={ router } />
    </EditWrapper>
  );
};

export default Edit;
