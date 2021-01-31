import styled from 'styled-components';
import { TextField, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const PublishWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 20vh;
    .publish-field {
      margin: 20px 0px;
    }
    .publish-field-title {
      font-size: 24px;
    }
    .publish-field-content {
      font-size: 20px;
      width: 90vw;
    }
    .publish-link {
      width: 90vw;
    }
    .publish-field-action {
      display: flex;
      justify-content: space-around;
      width: 90vw;
    }
`;

const Publish = ({ publishLink }) => {
  const history = useHistory();

  const onCopyText = () => {
    try {
      const text = document.getElementById('publishLink');
      text.select();
      document.execCommand('Copy');
    } catch (err) {
      console.log('not copy');
    }
  };
  return (
    <PublishWrapper>
      <h1 className="publish-field publish-field-title">Cheers, You finished your sharing！</h1>
      <p className="publish-field publish-field-content">You can simply download or just share the link to your friends.</p>
      <div className="publish-field">
        <TextField
          className="publish-link"
          id="publishLink"
          name="publishLink"
          label="Your share link"
          value={ publishLink }
        />
      </div>
      <div className="publish-field publish-field-action">
        <Button className="publish-button" variant="contained" color="primary" onClick={ () => onCopyText() }>Copy link</Button>
        <Button className="publish-button" onClick={ () => history.push('/product') } variant="contained" color="primary">See your product</Button>
      </div>
    </PublishWrapper>
  );
};

export default Publish;
