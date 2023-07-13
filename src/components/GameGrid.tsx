import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardBg from "./GameCardBg";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { data: games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      {games.length > 0 && (
        <SimpleGrid
          columns={{
            sm: 1,
            md: 2,
            lg: 3,
            xl: 5,
          }}
          spacing={3}
          padding="10px"
        >
          {(isLoading || (games.length === 0 && error === "")) &&
            skeletons.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <GameCardBg key={skeleton} />
              </GameCardContainer>
            ))}
          {games.length > 0 &&
            games.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard key={game.id} game={game} />
              </GameCardContainer>
            ))}
        </SimpleGrid>
      )}
    </>
  );
};

export default GameGrid;
