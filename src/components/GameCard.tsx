import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import GamePlatform from "./GamePlatform";
import GameCriticScore from "./GameCriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"} width="300px">
      <Image
        boxSize={"small"}
        src={getCroppedImageUrl(game.background_image)}
      />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <GamePlatform
            platforms={game.parent_platforms.map((el) => el.platform)}
          />
          <GameCriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
