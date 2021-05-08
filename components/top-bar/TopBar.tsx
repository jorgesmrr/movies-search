import styled from "styled-components";
import LimitedWidth from "../limited-width/LimitedWidth";
import Menu from "../menu/Menu";
import SearchBar from "../search/SearchBar";

const TopBarWrapper = styled.div`
  background-color: ${(props) => props.theme.color.neutral.darkest};
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  box-shadow: ${(props) => props.theme.shadow[3]};
`;

const TopBarContents = styled(LimitedWidth)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.color.white};
`;

const TopBar: React.FC = () => {
  return (
    <TopBarWrapper>
      <TopBarContents>
        <Menu />
        <SearchBar />
      </TopBarContents>
    </TopBarWrapper>
  );
};

export default TopBar;
