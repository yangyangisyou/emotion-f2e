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
      & > p {
        font-size: 20px;
      }
    }
    .searchbar-link + .searchbar-link {
      margin-left: 10px;
    }
`;

const SearchBar = ({ setCurrentCat, titleList, onSnowingEmoji }) => {
  return (
    <SearchBarWrapper>
      { titleList.map((record, key) => <div className="searchbar-link" key={ key } onClick={ () => { setCurrentCat(record.productNo); onSnowingEmoji(record.productNo); } }><p>{record.productName}</p></div>) }
    </SearchBarWrapper>
  );
};

export default SearchBar;
