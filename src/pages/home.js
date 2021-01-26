import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import CardList from '../components/cardList';
import Navbar from '../components/Navbar';
import Landing from '../components/landing';
import SearchBar from '../components/searchBar';
import { loadProductList } from '../actions/product';
import { landingImageTable } from '../config/table';

const Home = () => {
  const [currentCat, setCurrentCat] = useState('10000');
  const isLoadingProduct = useSelector((state) => state.product.isLoadingProduct);
  const productList = useSelector((state) => state.product.data);
  const dispatch = useDispatch();
  console.log('currentCat -->', currentCat);
  useEffect(() => {
    dispatch(loadProductList(currentCat));
  }, [currentCat]);
  const titleList = [
    { productName: 'Foodie', productNo: '10000' },
    { productName: 'Travel', productNo: '20000' },
    { productName: 'Cure', productNo: '30000' },
  ];
  return (
    <>
      <Navbar />
      <Landing imageLink={ landingImageTable[currentCat] } />
      <SearchBar titleList={ titleList } setCurrentCat={ setCurrentCat } />
      <CardList productList={ productList } isLoading={ isLoadingProduct } />
    </>
  );
};

export default Home;
