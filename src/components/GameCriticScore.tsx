import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const GameCriticScore = ({ score }: Props) => {
  const colorDecider =
    score > 85 ? "green" : score > 75 ? "yellow" : score > 60 ? "coral" : "red";
  return (
    <Badge
      fontSize={"14px"}
      colorScheme={colorDecider}
      paddingX={2}
      borderRadius={"4px"}
    >
      {score}
    </Badge>
  );
};

export default GameCriticScore;
