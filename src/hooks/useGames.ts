import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Game {
  id: string;
  name: string;
  background_image: string;
  parent_platforms: {platform: Platform}[];
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

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchGamesRespose>("/games", { signal: controller.signal})
      .then((response) => setGames(response.data.results))
      .catch((error) => {
        if ( error instanceof CanceledError ) return;
        else setError(error);
      });

      return () => controller.abort();
  }, []);

  return {games, error};
}

export default useGames;