import styled from "styled-components";
import LimitedWidth from "../limited-width/LimitedWidth";
import Menu from "../../menu/Menu";
import SearchBar from "../../search/SearchBar";

const NavbarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  box-shadow: ${({ theme }) => theme.shadow[3]};
`;

const NavbarBackground = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 00;
  width: 100%;
  height: 100%;
  background-color: rgba(20, 20, 20, 0.75);
  backdrop-filter: blur(3px);
`;

const NavbarContents = styled(LimitedWidth)`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.125rem;
`;

interface NavbarProps {
  onSubmitSearch: (search: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSubmitSearch }) => {
  return (
    <NavbarWrapper>
      <NavbarBackground />
      <NavbarContents>
        <Menu />
        <SearchBar onSubmit={onSubmitSearch} />
      </NavbarContents>
    </NavbarWrapper>
  );
};

export default Navbar;
