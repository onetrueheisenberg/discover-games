import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import GamePlatform from "./GamePlatform";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image boxSize={"small"} src={game.background_image} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <GamePlatform
          platforms={game.parent_platforms.map((el) => el.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
