import styled from 'styled-components';
import Chip from '@material-ui/core/Chip';
import { categories } from '../../config/table';

const TagListWrapper = styled.ul`
  display: flex;
  flex: auto;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar:horizontal {
    height: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparentize(#ccc, 0.7);
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: transparentize(#ccc, 0.5);
    box-shadow: inset 0 0 2px rgba(0,0,0,0.5); 
  }
  @media screen and (max-width: 768px) {
    /* body {
      background-color: olive;
    } */
  }
`;

const tagList = ({ categoryNo, onSelect, selectedNo }) => {
  return (
    <>
      <TagListWrapper>
        { categories[categoryNo].map((element, key) => (
          <Chip
          // avatar={ <Avatar alt="Natacha" src="/static/images/avatar/1.jpg" /> }
            label={ element.label }
            color={ selectedNo === key ? 'primary' : '' }
            clickable={ selectedNo === key }
            onClick={ () => onSelect(key, element.label) }
          // onDelete={ handleDelete }
            variant="outlined"
          />
        )) }
      </TagListWrapper>
    </>
  );
};

export default tagList;
