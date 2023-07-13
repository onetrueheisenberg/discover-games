import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const GameSortSelector = () => {
  const menuItems = [
    "Relevance",
    "Data added",
    "Name",
    "Release date",
    "Popularity",
    "Avg. Rating",
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: Relevance
      </MenuButton>
      <MenuList>
        {menuItems.map((sortOption) => (
          <MenuItem key={sortOption}>{sortOption}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default GameSortSelector;
