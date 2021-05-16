import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import styled from "styled-components";
import { ListNone, transition } from "../style/style";

const MenuList = styled(ListNone)`
  display: flex;
  gap: 2rem;
  text-transform: uppercase;
  font-weight: 800;
`;

const MenuItem = styled.li<{ selected?: boolean }>`
  border-bottom: 4px solid transparent;
  ${transition("border-color")}
  ${(props) =>
    props.selected && `border-color: ${props.theme.color.accent.dark};`}

  &:hover {
    border-color: ${({ theme }) => theme.color.accent.dark};
  }

  &:active {
    border-color: ${({ theme }) => theme.color.accent.darker};
  }
`;

const StyledLink = styled.a`
  display: block;
  color: ${({ theme }) => theme.color.neutral.lightest};
  line-height: 4rem;
  cursor: pointer;
`;

const Menu: React.FC = () => {
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
      <MenuList>
        {items.map((item, index) => (
          <MenuItem key={index} selected={item.selected}>
            <Link href={item.href}>
              <StyledLink>{item.label}</StyledLink>
            </Link>
          </MenuItem>
        ))}
      </MenuList>
    </nav>
  );
};

export default Menu;
