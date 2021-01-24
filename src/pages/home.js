import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Card from '../components/card';
import CardList from '../components/cardList';
import Navbar from '../components/Navbar';
import Landing from '../components/landing';
import SearchBar from '../components/searchBar';
import { loadHotProductsTitle } from '../actions/product';

const Home = () => {
  const titleList = useSelector((state) => state.product.titleList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadHotProductsTitle());
  }, []);
  return (
    <>
      <Navbar />
      <Landing />
      <SearchBar titleList={ titleList } />
      <CardList />
      {/* <Sider /> */}
      <Card />
      {/* <Meme /> */}
    </>
  );
};

export default Home;
