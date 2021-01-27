import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import styled from 'styled-components';
import { loadProduct } from '../actions/product';
import EditProductForm from '../components/editProductForm';

const EditWrapper = styled.div`
`;

const Edit = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProduct('10000', 1));
  });
  const initialValue = {
    email: '',
    password: '',
  };
  return (
    <EditWrapper>
      <EditProductForm initialValue={ initialValue } />
    </EditWrapper>
  );
};

export default Edit;
