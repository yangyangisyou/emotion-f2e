// import { useSelector, useDispatch } from 'react-redux';
// import { increment } from './actions';
// import Meme from '../components/meme';
import Card from '../components/card';
import CardList from '../components/cardList';
import Navbar from '../components/Navbar';
import Landing from '../components/landing';
import SearchBar from '../components/searchBar';

// import Sider from '../components/Sider';

const Home = () => {
  // const counter = useSelector((state) => state.counter);
  // const dispatch = useDispatch();
  return (
    <>
      <Navbar />
      <Landing />
      <SearchBar />
      <CardList />
      {/* <Sider /> */}
      <Card />
      {/* <Meme /> */}
    </>
  );
};

export default Home;
