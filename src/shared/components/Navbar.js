import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 70px; 
  border-bottom: 1px solid #eee;
  .header-list {
    margin-left: 30px;
    margin-right: 30px;
    .header-link {
      list-style: none;
      float: left;
      margin-right: 30px;
      a {
        font-weight: 700;
        color: #333;
        font-size: 14px;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
      a:hover {
        color: #000;
        cursor: pointer;
      }
    }

    .header-link-home > a {
      font-size: 16px;
    }
  }
`;

const Navbar = () => {
  return (
    <HeaderWrapper>
      <ul className="header-list">
        <li className="header-link header-link-home"><Link to="/">Home</Link></li>
      </ul>
    </HeaderWrapper>
  );
};
export default Navbar;
