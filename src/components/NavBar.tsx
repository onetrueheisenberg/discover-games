import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import GameSearchBar from "./GameSearchBar";

const NavBar = () => {
  return (
    <HStack padding={"10px"}>
      <Image boxSize="60px" src={logo} />
      <GameSearchBar />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
