import styled from 'styled-components';

const SearchBarWrapper = styled.div`
    height: 100px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: grey;
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

const SearchBar = ({ setCurrentCat, titleList }) => {
  return (
    <SearchBarWrapper>
      { titleList.map((record, key) => <div className="searchbar-link" key={ key } onClick={ () => setCurrentCat(record.productNo) }><p>{record.productName}</p></div>) }
    </SearchBarWrapper>
  );
};

export default SearchBar;
