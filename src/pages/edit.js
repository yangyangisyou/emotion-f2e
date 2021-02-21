import { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProductImage } from '../actions/asset';
import { createProduct, loadProduct } from '../actions/product';
import EditProductForm from '../components/edit';
import Navbar from '../shared/components/Navbar';
import StepFooter from '../shared/components/stepFooter';
import useRouter from '../util/useRouter';
import LoadingModal from '../shared/components/loadingModal';

const Edit = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const editRef = useRef(null);
  const isSubmitting = useSelector((state) => state.product.isSubmitting);
  const recommandImages = useSelector((state) => state.asset.recommandImages);
  const loadingRecommandImages = useSelector((state) => state.asset.loadingRecommandImages);
  const [initialData, setInitialData] = useState(null);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const productId = router.query.productId;
    if (productId) {
      const dataFromStorage = localStorage.getItem('editStorage');
      if (dataFromStorage) {
        setInitialData(JSON.parse(dataFromStorage));
      } else {
        const result = dispatch(loadProduct(productId));
        if (result.payload && result.payload.success) {
          const payload = result.payload;
          setInitialData(JSON.parse(payload));
        }
      }
    } else {
      setInitialData({
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
      });
    }
  }, []);

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
      router.history.push(`/canvas${productId ? `?productId=${productId}` : ''}`);
    } else {
      setIsError(true);
    }
  };
  return (
    <>
      <Navbar />
      {initialData && (
      <EditProductForm
        initialValue={ initialData }
        recommandImages={ recommandImages }
        onSearchRecommendImage={ onSearchRecommendImage }
        loadingRecommandImages={ loadingRecommandImages }
        onSubmitForm={ onSubmitForm }
        editRef={ editRef }
      />
      )}
      {isSubmitting && <LoadingModal isError={ isError } errorText="Uh oh, we got a network issues." />}
      <StepFooter activeStep={ 0 } stepRef={ editRef } onSubmitForm={ onSubmitForm } router={ router } />
    </>
  );
};

export default Edit;
