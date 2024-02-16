import React from "react";
import RowSong from "./RowSong";

const HomePage = () => {
  const artists = ["Adele", "Coldplay", "Ed Sheeran"];

  return (
    <div style={{ paddingBottom: "70px" }}>
      {artists.map((artist) => (
        <RowSong key={artist} artist={artist} />
      ))}
    </div>
  );
};

export default HomePage;
