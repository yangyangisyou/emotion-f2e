import Navbar from '../shared/components/Navbar';
import StepFooter from '../shared/components/stepFooter';
import PublishProduct from '../components/publish/publish';

const Publish = () => {
  return (
    <>
      <Navbar />
      <PublishProduct publishLink="https://www.google.com" />
      <StepFooter activeStep={ 2 } />
    </>
  );
};

export default Publish;
