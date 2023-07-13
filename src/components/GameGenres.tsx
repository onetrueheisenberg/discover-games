import React from "react";
import useGenres from "../hooks/useGenres";

const GameGenres = () => {
  const { genres, error, isLoading } = useGenres();
  return (
    <ul>
      {genres.map((genre) => (
        <li>
          {genre.id} {genre.name}
        </li>
      ))}
    </ul>
  );
};

export default GameGenres;
