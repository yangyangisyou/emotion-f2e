import styled from 'styled-components';
import { color } from '../../config/var';

const GuideWrapper = styled.div`
    background-color: ${color.mutedBlue};
    padding: 5vh 5vw;
    font-family: 'Montserrat', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    .guide-title {
        font-size: 30px;
        font-weight: 600;
        text-align: center;
        display: flex;
    }
    .guide-news-list {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        /* flex-direction: column; */
        justify-content: center;
        align-items: center;
        
        /* width: 80vw; */
        /* .guide-news {
            border-radius: 20px;
            border: 1px black solid;
            width: 250px;
            height: 250px;
            padding: 10px;
            margin: 20px;
            cursor: pointer;
            .guide-news-title {
                font-weight: bold;
                font-size: 20px;
            }
        } */
    }

    .guide-title + .guide-news-list {
        margin-top: 50px;
    }

    @media screen and (max-width: 768px) {
      .guide-title {
        flex-direction: column;
      }
    }
`;

const NewsWrapper = styled.li`
    border-radius: 20px;
    border: 1px black solid;
    width: 250px;
    height: 250px;
    padding: 10px;
    margin: 20px;
    cursor: pointer;
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${(props) => (props.image || 'https://media.istockphoto.com/photos/breaking-news-world-news-with-map-backgorund-picture-id1182477852?k=6&m=1182477852&s=612x612&w=0&h=X-UipiiX5xcMw9dBhzKZWG7UcWjEOARl2s_oTVV8rtE=')});
    background-repeat: no-repeat;
    background-size: cover;
    .guide-news-title {
        font-weight: bold;
        font-size: 24px;
        color: white;
        text-align: center;
    }
`;

// https://newsapi.org/
const Guide = ({ newsList }) => {
  return (
    <GuideWrapper>
      <h3 className="guide-title">
        <p>No ideas？</p>
        <p>Check out related news</p>
      </h3>
      <ul className="guide-news-list">
        { newsList.map((news, key) => (
          <NewsWrapper onClick={ () => open(news.url, '_blank') } image={ news.image } key={ key }>
            <h4 className="guide-news-title">{news.title}</h4>
          </NewsWrapper>
        )) }
        {/* <li className="guide-news">1</li>
        <li className="guide-news">2</li>
        <li className="guide-news">3</li> */}
      </ul>
    </GuideWrapper>
  );
};

export default Guide;
