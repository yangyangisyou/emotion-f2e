import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const SearchBarWrapper = styled.div`
    height: 100px;
    display: flex;
    align-items: center;
    justify-items: center;
    background-color: grey;
`;

const StyledButton = withStyles({
  root: {
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
  }
})(Button);

const SearchBar = ({ titleList }) => {
  return (
    <SearchBarWrapper>
      { titleList.map((record, key) => <StyledButton key={ key }>{record.productName}</StyledButton>) }
    </SearchBarWrapper>
  );
};

export default SearchBar;
