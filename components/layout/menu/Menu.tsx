import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import styled from "styled-components";
import { ListNone, transition } from "../../style/style";

const MenuList = styled(ListNone)`
  font-size: 1.125rem;
  font-weight: 800;
  text-transform: uppercase;
  padding: 1rem 1rem 0 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    padding: 0;
    gap: 2rem;
  }
`;

const MenuItem = styled.li<{ selected?: boolean }>`
  margin: 0.5rem 0;
  padding: 0.75rem 0 0.75rem 1rem;
  border-bottom: none;
  border-left: 4px solid
    ${({ selected, theme }) =>
      selected ? theme.color.accent.dark : "transparent"};
  ${transition("border-color")}

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0;
    margin: 0;
    border-left: none;
    border-bottom: 4px solid
      ${({ selected, theme }) =>
        selected ? theme.color.accent.dark : "transparent"};
  }

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
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    line-height: 4rem;
  }
`;

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
      <MenuList>
        {items.map((item, index) => (
          <MenuItem key={index} selected={item.selected}>
            <Link href={item.href}>
              <StyledLink onClick={onNavigate}>{item.label}</StyledLink>
            </Link>
          </MenuItem>
        ))}
      </MenuList>
    </nav>
  );
};

export default Menu;
