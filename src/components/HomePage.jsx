import React from "react";
import RowSong from "./RowSong";

const HomePage = () => {
  const artists = ["Adele", "Coldplay", "Ed Sheeran"];

  return (
    <div>
      {artists.map((artist) => (
        <RowSong key={artist} artist={artist} />
      ))}
    </div>
  );
};

export default HomePage;
