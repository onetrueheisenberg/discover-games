import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      {games.length > 0 && (
        <ul>
          {games.map((game) => (
            <li key={game.id}>
              {game.id} {game.name}{" "}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default GameGrid;
