import { useEffect, useState } from 'react';
import Navbar from '../shared/components/Navbar';
import StepFooter from '../shared/components/stepFooter';
import PublishProduct from '../components/publish/publish';
import useRouter from '../util/useRouter';
import { SITE_PATH } from '../config/setting';

const Publish = () => {
  const router = useRouter();
  const [productLink, setProductLink] = useState('');
  useEffect(() => {
    const productId = router.query.productId;
    setProductLink(`${SITE_PATH}/product?productId=${productId}`);
  }, []);
  return (
    <>
      <Navbar />
      <PublishProduct />
      <StepFooter activeStep={ 2 } publishLink={ productLink } router={ router } />
    </>
  );
};

export default Publish;
