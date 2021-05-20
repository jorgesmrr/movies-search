import styled from "styled-components";
import LimitedWidth from "../limited-width/LimitedWidth";
import Menu from "../menu/Menu";
import SearchBar from "../../search/SearchBar";
import MenuIcon from "../../icon/MenuIcon";
import Drawer from "@bit/jorgemoreira.headless-react.surface.drawer";
import theme from "../../../styles/theme";
import { useState } from "react";
import { ForLargeScreens, ForSmallScreens } from "../../style/style";

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
  min-height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`;

interface NavigationProps {
  onSubmitSearch: (search: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSubmitSearch }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer
        open={openDrawer}
        handleClose={() => setOpenDrawer(false)}
        background={theme.color.neutral.darkest}
        shadow={theme.shadow[4]}
      >
        <Menu />
      </Drawer>

      <NavbarWrapper>
        <NavbarBackground />
        <NavbarContents>
          <ForSmallScreens onClick={() => setOpenDrawer(true)}>
            <MenuIcon />
          </ForSmallScreens>
          <ForLargeScreens>
            <Menu />
          </ForLargeScreens>
          <SearchBar onSubmit={onSubmitSearch} />
        </NavbarContents>
      </NavbarWrapper>
    </>
  );
};

export default Navigation;
