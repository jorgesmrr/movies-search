import styled from "styled-components";
import { ListNone } from "../style/style";

const MenuList = styled(ListNone)`
  display: flex;
  gap: 2rem;
  text-transform: uppercase;
  font-weight: 800;
`;

const Menu: React.FC = () => {
  const items: { label: string }[] = [
    { label: "Home" },
    { label: "Trending" },
    { label: "Popular" },
    { label: "Top Rated" },
    { label: "In Theaters" },
  ];

  return (
    <nav>
      <MenuList>
        {items.map((item) => (
          <li>{item.label}</li>
        ))}
      </MenuList>
    </nav>
  );
};

export default Menu;
