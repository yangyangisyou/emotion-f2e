// import { useSelector, useDispatch } from 'react-redux';
// import { increment } from './actions';
import Meme from '../components/meme';
import Navbar from '../components/Navbar';
import Sider from '../components/Sider';

const Home = () => {
  // const counter = useSelector((state) => state.counter);
  // const dispatch = useDispatch();
  return (
    <>
      <Navbar />
      <Sider />
      <Meme />
    </>
  );
};

export default Home;
