import { useEffect, useState } from 'react';
import Navbar from '../shared/components/Navbar';
import StepFooter from '../shared/components/stepFooter';
import PublishProduct from '../components/publish/publish';
import useRouter from '../util/useRouter';

const Publish = () => {
  const router = useRouter();
  const [productLink, setProductLink] = useState('');
  useEffect(() => {
    const productId = router.query.productId;
    setProductLink(`https://www.google.com/test?productId=${productId}`);
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
