import React from "react";
import { useSelector } from "react-redux";
import SingleSong from "./SingleSong";

const SavedSongs = () => {
  const savedSongs = useSelector((state) => state.songs.favorites);

  return (
    <div>
      <h2>Le tue canzoni</h2>
      {savedSongs.map((song) => (
        <SingleSong key={song.id} song={song} />
      ))}
    </div>
  );
};

export default SavedSongs;
