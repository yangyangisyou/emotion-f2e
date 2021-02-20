import styled from 'styled-components';
import { emojiSelect } from '../../config/table';
import { color } from '../../config/var';

const ToolsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  .tools-button {
    padding: 10px 15px;
    border-radius: 15px;
    background-color: ${color.colorDark};
    color: white;
    font-weight: bold;
    cursor: pointer;
  }
  .tools-list {
    display: flex;
    flex: auto;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    width: 80vw;
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
    .canvas-emoji {
      margin-left: 20px;
      cursor: pointer;
      font-size: 40px;
    }
  }

  .tools-button + .tools-list {
    margin-left: 20px;
  }
  @media screen and (max-width: 768px) {
    padding: auto 2vw;
    .tools-button + .tools-list {
      margin-left: 0;
    }
  }
`;

const CanvasTools = ({ onCreateIcon, setIconIndex, iconIndex }) => {
  return (
    <ToolsWrapper>
      <div className="tools-button" onClick={ () => setIconIndex((iconIndex + 1) % 6) }>CHANGE</div>
      <div className="tools-list">
        { emojiSelect[iconIndex].map((emoji, key) => <span className="canvas-emoji" onClick={ () => onCreateIcon(emoji) } key={ key }>{emoji}</span>) }
      </div>
    </ToolsWrapper>
  );
};

export default CanvasTools;
