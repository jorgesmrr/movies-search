import Link from "next/link";
import styled from "styled-components";
import { ListNone } from "../style/style";

const MenuList = styled(ListNone)`
  display: flex;
  gap: 2rem;
  text-transform: uppercase;
  font-weight: 800;
`;

const StyledLink = styled.a`
  color: ${(props) => props.theme.color.white};
  cursor: pointer;
`;

const Menu: React.FC = () => {
  const items: { label: string; href: string }[] = [
    { label: "Home", href: "/" },
    { label: "Trending", href: "/" },
    { label: "Popular", href: "/" },
    { label: "Top Rated", href: "/" },
    { label: "In Theaters", href: "/" },
  ];

  return (
    <nav>
      <MenuList>
        {items.map((item, index) => (
          <li key={index}>
            <Link href={item.href}>
              <StyledLink>{item.label}</StyledLink>
            </Link>
          </li>
        ))}
      </MenuList>
    </nav>
  );
};

export default Menu;
