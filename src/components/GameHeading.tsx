import { Heading } from "@chakra-ui/react";
import React from "react";
import { Query } from "../App";

interface Props {
  query: Query;
}

const GameHeading = ({ query }: Props) => {
  const heading = `${query.genre?.name || ""} ${
    query.platform?.name || ""
  } Games`;
  return (
    <Heading as="h1" marginY={5} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
