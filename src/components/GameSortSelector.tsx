import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  sortOrder: string;
  onSortOrderClick: (sortOrder: string) => void;
}

const GameSortSelector = ({ sortOrder, onSortOrderClick }: Props) => {
  const menuItems = [
    { value: "relevance", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Avg. Rating" },
  ];
  const currSortOrder = menuItems.find(
    (item) => item.value === sortOrder
  )?.label;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currSortOrder || "Relevance"}
      </MenuButton>
      <MenuList>
        {menuItems.map((sortOption) => (
          <MenuItem
            onClick={() => onSortOrderClick(sortOption.value)}
            key={sortOption.value}
            value={sortOption.value}
          >
            {sortOption.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default GameSortSelector;
