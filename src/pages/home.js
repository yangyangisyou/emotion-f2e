import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import CardList from '../components/home/cardList';
import Navbar from '../shared/components/Navbar';
import Landing from '../components/landing';
import SearchBar from '../components/searchBar';
import { loadProductList } from '../actions/product';
import { landingImageTable, titleList } from '../config/table';
// import Modal from '../shared/components/Modal';

const Home = () => {
  const [currentCat, setCurrentCat] = useState('10000');
  const isLoadingProduct = useSelector((state) => state.product.isLoadingProduct);
  const productList = useSelector((state) => state.product.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProductList(currentCat));
  }, [currentCat]);
  const linkList = [
    { link: '/edit', text: 'CREATE' },
  ];
  return (
    <>
      <Navbar linkList={ linkList } />
      <Landing imageLink={ landingImageTable[currentCat] } />
      <SearchBar titleList={ titleList } setCurrentCat={ setCurrentCat } />
      <CardList productList={ productList } isLoading={ isLoadingProduct } />
      {/* <Modal /> */}
    </>
  );
};

export default Home;
