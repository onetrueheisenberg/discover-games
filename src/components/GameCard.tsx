import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import GamePlatform from "./GamePlatform";
import GameCriticScore from "./GameCriticScore";
import getCroppedImageUrl from "../services/image-url";
import GameEmojis from "./GameEmojis";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image
        boxSize={"small"}
        src={getCroppedImageUrl(game.background_image)}
      />
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={3}>
          <GamePlatform
            platforms={game.parent_platforms.map((el) => el.platform)}
          />
          <GameCriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize={"2xl"}>
          {game.name} <GameEmojis rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
