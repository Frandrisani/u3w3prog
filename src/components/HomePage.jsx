import React from "react";
import { useSelector } from "react-redux";
import RowSong from "./RowSong";
import Sidebar from "./Sidebar";

const HomePage = () => {
  const searchArtist = useSelector((state) => state.songs.searchTerm);

  return (
    <div style={{ paddingBottom: "70px" }}>
      <Sidebar />
      <RowSong key={searchArtist} artist={searchArtist} />
    </div>
  );
};

export default HomePage;
