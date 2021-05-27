import styled from "styled-components";
import LimitedWidth from "../limited-width/LimitedWidth";
import Menu from "../menu/Menu";
import SearchBar from "../../search/SearchBar";
import MenuIcon from "../../icon/MenuIcon";
import Drawer from "@bit/jorgemoreira.headless-react.surface.drawer";
import { useScrollEffect } from "@bit/jorgemoreira.headless-react.hooks";
import theme from "../../../styles/theme";
import { useState } from "react";
import { ForLargeScreens, ForSmallScreens } from "../../style/style";

const NavbarWrapper = styled.div<{ transparent: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  background-color: rgba(
    20,
    20,
    20,
    ${({ transparent }) => (transparent ? 0.75 : 1)}
  );
  backdrop-filter: blur(3px);
  box-shadow: ${({ theme }) => theme.shadow[3]};
  transition: background-color 150ms ease-in-out;

  @supports (backdrop-filter: blur(3px)) {
    background-color: rgba(20, 20, 20, 0.75);
  }
`;

const NavbarContents = styled(LimitedWidth)`
  position: relative;
  z-index: 2;
  min-height: ${({ theme }) => theme.dimensions.navbarHeight};
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
  const [isNavbarTransparent, setNavbarTransparent] = useState(false);

  useScrollEffect(({ y }) => setNavbarTransparent(y <= 128));

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

      <NavbarWrapper transparent={isNavbarTransparent}>
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
