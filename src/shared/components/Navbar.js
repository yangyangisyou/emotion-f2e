import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 4.5vh; 
  border-bottom: 1px solid #eee;
  padding: 20px;
  .header-list {
    margin-left: 30px;
    margin-right: 30px;
  }
  .header-link {
    list-style: none;
    float: left;
    margin-right: 30px;
    cursor: pointer;
    a {
      font-weight: 700;
      color: #666;
      font-size: 14px;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    a:hover {
      color: #333;
    }
  }

  .header-link-home > a {
    color: #000;
    font-size: 16px;
  }

  .header-link-action {
    background-color: #6B8E23;
    padding: 10px 15px;
    border-radius: 20px;
    right: 0;
    a {
      color: white;
    }
    a:hover {
      color: white;
    }
  }
  .header-around {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;
const linkList = [
  { link: '/edit', text: 'CREATE' },
];

const Navbar = () => {
  return (
    <HeaderWrapper>
      <div className="header-link header-link-home"><Link to="/">Emotion</Link></div>
      <div className="header-around">
        <ul className="header-list">
          { linkList.map((element, key) => <li className="header-link" key={ key }><Link to={ element.link }>{element.text}</Link></li>) }
        </ul>
        <div className="header-link header-link-action"><Link to="/edit">create</Link></div>
      </div>
    </HeaderWrapper>
  );
};
export default Navbar;
