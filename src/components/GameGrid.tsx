import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Game {
  id: string;
  name: string;
}

interface FetchGamesRespose {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesRespose>("/games")
      .then((response) => setGames(response.data.results))
      .catch((error) => setError(error.message));
  });
  return (
    <>
      {error && <Text>{error}</Text>}
      {games.length > 0 && (
        <ul>
          {games.map((game) => (
            <li key={game.id}>
              {game.id} {game.name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default GameGrid;
