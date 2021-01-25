import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import CardList from '../components/cardList';
import Navbar from '../components/Navbar';
import Landing from '../components/landing';
import SearchBar from '../components/searchBar';
import { loadHotProductsTitle, loadProducts } from '../actions/product';

const Home = () => {
  const titleList = useSelector((state) => state.product.titleList);
  const isLoadingProduct = useSelector((state) => state.product.isLoadingProduct);
  const dispatch = useDispatch();
  useEffect(async () => {
    dispatch(loadHotProductsTitle());
    dispatch(loadProducts());
  }, []);
  return (
    <>
      <Navbar />
      <Landing />
      <SearchBar titleList={ titleList } isLoading={ isLoadingProduct } />
      <CardList />
      {/* <Sider /> */}
      {/* <Meme /> */}
    </>
  );
};

export default Home;
