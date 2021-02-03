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
      <PublishProduct publishLink={ productLink } />
      <StepFooter activeStep={ 2 } />
    </>
  );
};

export default Publish;
