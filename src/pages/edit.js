import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import styled from 'styled-components';
import { loadProduct } from '../actions/product';
import { loadProductImage } from '../actions/asset';
import EditProductForm from '../components/edit/editProductForm';

const EditWrapper = styled.div`
`;

const Edit = () => {
  const dispatch = useDispatch();
  const recommandImages = useSelector((state) => state.asset.recommandImages);
  const loadingRecommandImages = useSelector((state) => state.asset.loadingRecommandImages);
  useEffect(() => {
    dispatch(loadProduct('10000', 1));
    onSearchRecommendImage('cat');
  }, []);
  const onSearchRecommendImage = (keywords) => {
    dispatch(loadProductImage(keywords));
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
  console.log('recommandImages in edit', recommandImages);
  return (
    <EditWrapper>
      <EditProductForm initialValue={ initialValue } recommandImages={ recommandImages } onSearchRecommendImage={ onSearchRecommendImage } loadingRecommandImages={ loadingRecommandImages } />
    </EditWrapper>
  );
};

export default Edit;
