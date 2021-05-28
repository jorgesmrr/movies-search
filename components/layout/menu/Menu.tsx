import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import * as S from "./Menu.styles";

export interface MenuProps {
  onNavigate?: () => void;
}

const Menu: React.FC<MenuProps> = ({ onNavigate }) => {
  const router = useRouter();
  const items: { label: string; href: string; selected?: boolean }[] = [
    { label: "Home", href: "/" },
    { label: "Trending", href: "/trending" },
    { label: "Popular", href: "/popular" },
    { label: "Top Rated", href: "/top-rated" },
    { label: "In Theaters", href: "/in-theaters" },
  ];

  const selectedItem = items.find((item) => item.href === router.pathname);
  if (selectedItem) {
    selectedItem.selected = true;
  }

  return (
    <nav>
      <S.List>
        {items.map((item, index) => (
          <S.Item key={index} selected={item.selected}>
            <Link href={item.href}>
              <S.Link onClick={onNavigate}>{item.label}</S.Link>
            </Link>
          </S.Item>
        ))}
      </S.List>
    </nav>
  );
};

export default Menu;
