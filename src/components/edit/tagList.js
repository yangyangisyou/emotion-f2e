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
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;

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

const Tag = styled(Chip)`
  margin: 5px;
`;

const tagList = ({ categoryNo, onSelect, selectedNo }) => {
  return (
    <>
      <TagListWrapper>
        { categories[categoryNo].map((element, key) => (
          <Tag
          // avatar={ <Avatar alt="Natacha" src="/static/images/avatar/1.jpg" /> }
            label={ element.label }
            color={ selectedNo === key ? 'primary' : '' }
            clickable={ selectedNo === key }
            onClick={ () => onSelect(key, element.label) }
            key={ key }
          // onDelete={ handleDelete }
            variant="outlined"
          />
        )) }
      </TagListWrapper>
    </>
  );
};

export default tagList;
