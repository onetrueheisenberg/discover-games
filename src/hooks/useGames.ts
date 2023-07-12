import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Game {
  id: string;
  name: string;
  background_image: string;
  parent_platforms: {platform: Platform}[];
  metacritic: number;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

interface FetchGamesRespose {
  count: number;
  results: Game[];
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchGamesRespose>("/games", { signal: controller.signal})
      .then((response) => {
        setLoading(false);
        setGames(response.data.results);
      })
      .catch((error) => {
        if ( error instanceof CanceledError ) return;
        else setError(error);
        setLoading(false);
      });

      return () => controller.abort();
  }, []);

  return {games, error, isLoading};
}

export default useGames;