import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import CardList from '../components/home/cardList';
import Guide from '../components/home/guide';
import Navbar from '../shared/components/Navbar';
import EmojiRain from '../shared/components/emojiRain';
import Landing from '../components/landing';
import SearchBar from '../components/searchBar';
import { loadProductList } from '../actions/product';
import { landingImageTable, titleList } from '../config/table';
import { onSnowingEmoji } from '../util/decorator';

const Home = () => {
  const [currentProductType, setCurrentProductType] = useState('10000');
  const isLoadingProduct = useSelector((state) => state.product.isLoadingProduct);
  const productList = useSelector((state) => state.product.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProductList(currentProductType));
  }, [currentProductType]);
  return (
    <>
      <EmojiRain />
      <Navbar />
      <Landing imageLink={ landingImageTable[currentProductType] } />
      <SearchBar titleList={ titleList } setCurrentProductType={ setCurrentProductType } onSnowingEmoji={ onSnowingEmoji } />
      <CardList productList={ productList } isLoading={ isLoadingProduct } />
      <Guide />

    </>
  );
};

export default Home;
