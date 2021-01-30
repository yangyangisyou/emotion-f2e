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
  useEffect(() => {
    dispatch(loadProduct('10000', 1));
    dispatch(loadProductImage('cat'));
  }, []);
  const initialValue = {
    productName: '',
    userName: '',
    avatar: '',
    description: '',
    picture: '',
    email: '',
    password: '',
  };
  console.log('recommandImages in edit', recommandImages);
  return (
    <EditWrapper>
      <EditProductForm initialValue={ initialValue } recommandImages={ recommandImages } />
    </EditWrapper>
  );
};

export default Edit;
