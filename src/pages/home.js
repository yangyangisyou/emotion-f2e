import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import CardList from '../components/home/cardList';
import Guide from '../components/home/guide';
import Navbar from '../shared/components/Navbar';
import EmojiRain from '../shared/components/emojiRain';
import Landing from '../components/landing';
import SearchBar from '../components/searchBar';
import { loadProductList } from '../actions/product';
import { landingImageTable, titleList, largeCatTable } from '../config/table';
import { onSnowingEmoji } from '../util/decorator';
import { loadNewsList } from '../actions/asset';

const Home = () => {
  const [currentProductType, setCurrentProductType] = useState('10000');
  const currentProductName = largeCatTable[currentProductType];
  const isLoadingProduct = useSelector((state) => state.product.isLoadingProduct);
  const productList = useSelector((state) => state.product.data);
  const newsList = useSelector((state) => state.asset.newsList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProductList(currentProductType));
    dispatch(loadNewsList(currentProductName));
  }, [currentProductType]);
  return (
    <>
      <EmojiRain />
      <Navbar />
      <Landing imageLink={ landingImageTable[currentProductType] } />
      <SearchBar titleList={ titleList } setCurrentProductType={ setCurrentProductType } onSnowingEmoji={ onSnowingEmoji } />
      <CardList productList={ productList } isLoading={ isLoadingProduct } />
      <Guide newsList={ newsList } />

    </>
  );
};

export default Home;
