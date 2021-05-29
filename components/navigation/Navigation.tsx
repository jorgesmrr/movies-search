import Menu from "../menu/Menu";
import SearchBar from "../search/SearchBar";
import MenuIcon from "../icon/MenuIcon";
import Drawer from "@bit/jorgemoreira.headless-react.surface.drawer";
import {
  useScrollEffect,
  useToggle,
} from "@bit/jorgemoreira.headless-react.hooks";
import { useState } from "react";
import { HiddenLgUp, VisibleLgUp } from "../style/style";
import * as S from "./Navigation.styles";
import theme from "../style/theme";

interface NavigationProps {
  onSubmitSearch: (search: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSubmitSearch }) => {
  const {
    isOn: isDrawerOpen,
    setOn: openDrawer,
    setOff: closeDrawer,
  } = useToggle(false);

  const [isNavbarTransparent, setNavbarTransparent] = useState(false);

  useScrollEffect(({ y }) => setNavbarTransparent(y <= 128));

  return (
    <>
      <Drawer
        open={isDrawerOpen}
        handleClose={closeDrawer}
        background={theme.color.neutral.darkest}
        shadow={theme.shadow[4]}
      >
        <Menu onNavigate={closeDrawer} />
      </Drawer>

      <S.NavbarWrapper transparent={isNavbarTransparent}>
        <S.NavbarContents>
          <HiddenLgUp onClick={openDrawer}>
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
