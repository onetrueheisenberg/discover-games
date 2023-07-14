import { Query } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";

export interface Game {
  id: string;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (query: Query) =>
  useData<Game>(
    "games",
    {
      params: {
        genres: query?.genre?.id,
        parent_platforms: query?.platform?.id,
        ordering: query?.sortOrder,
        search: query?.searchQuery,
      },
    },
    [query]
  );

export default useGames;
