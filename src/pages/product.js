import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import CardList from '../components/cardList';
import Navbar from '../components/Navbar';
import Landing from '../components/landing';
import SearchBar from '../components/searchBar';
import { loadProductList, loadHotProductsTitle } from '../actions/product';

const Home = () => {
  const defaultCat = '10000';
  const titleList = useSelector((state) => state.product.titleList);
  const isLoadingProduct = useSelector((state) => state.product.isLoadingProduct);
  const dispatch = useDispatch();
  useEffect(async () => {
    dispatch(loadHotProductsTitle());
    dispatch(loadProductList(defaultCat));
  }, []);
  return (
    <>
      <Navbar />
      <Landing />
      <SearchBar titleList={ titleList } />
      <CardList isLoading={ isLoadingProduct } />
      {/* <Sider /> */}
      {/* <Meme /> */}
    </>
  );
};

export default Home;
