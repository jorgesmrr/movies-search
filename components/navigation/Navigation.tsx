import Menu from "../menu/Menu";
import SearchBar from "../search/SearchBar";
import MenuIcon from "../icon/MenuIcon";
import Drawer from "@bit/jorgemoreira.headless-react.surface.drawer";
import { useScrollEffect } from "@bit/jorgemoreira.headless-react.hooks";
import { useState } from "react";
import { HiddenLgUp, VisibleLgUp } from "../style/style";
import * as S from "./Navigation.styles";
import theme from "../style/theme";

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
        <Menu onNavigate={() => setOpenDrawer(false)} />
      </Drawer>

      <S.NavbarWrapper transparent={isNavbarTransparent}>
        <S.NavbarContents>
          <HiddenLgUp onClick={() => setOpenDrawer(true)}>
            <MenuIcon />
          </HiddenLgUp>
          <VisibleLgUp>
            <Menu />
          </VisibleLgUp>
          <SearchBar onSubmit={onSubmitSearch} />
        </S.NavbarContents>
      </S.NavbarWrapper>
    </>
  );
};

export default Navigation;
