import styled from "styled-components";
import LimitedWidth from "../limited-width/LimitedWidth";
import Menu from "../../menu/Menu";
import SearchBar from "../../search/SearchBar";

const TopBarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  z-index: 10;
  box-shadow: ${(props) => props.theme.shadow[3]};
`;

const TopBarBackground = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 00;
  width: 100%;
  height: 100%;
  background-color: rgba(20, 20, 20, 0.75); // TODO put in theme
  backdrop-filter: blur(3px);
`;

const TopBarContents = styled(LimitedWidth)`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.125rem;
`;

interface TopBarProps {
  onSubmitSearch: (search: string) => void;
}

const TopBar: React.FC<TopBarProps> = ({ onSubmitSearch }) => {
  return (
    <TopBarWrapper>
      <TopBarBackground />
      <TopBarContents>
        <Menu />
        <SearchBar onSubmit={onSubmitSearch} />
      </TopBarContents>
    </TopBarWrapper>
  );
};

export default TopBar;
