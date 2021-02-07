import styled from 'styled-components';
import { color } from '../config/var';

const SearchBarWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 30px 10px;
    background-color: ${color.secondary};
    .searchbar-link {
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      cursor: pointer;
      height: 100%;
      width: 150px;
      .searchbar-link-text {
        font-size: 16px;
        text-transform: uppercase;
      }
    }
    .searchbar-link + .searchbar-link {
      margin-left: 10px;
    }
`;

const SearchBar = ({ setCurrentProductType, titleList, onSnowingEmoji }) => {
  return (
    <SearchBarWrapper>
      { titleList.map((record, key) => <div className="searchbar-link" key={ key } onClick={ () => { setCurrentProductType(record.productNo); onSnowingEmoji(record.productNo); } }><h2 className="searchbar-link-text">{record.productName}</h2></div>) }
    </SearchBarWrapper>
  );
};

export default SearchBar;
