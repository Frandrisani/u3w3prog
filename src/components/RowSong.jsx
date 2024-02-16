import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getSongs } from "../redux/actions";
import SingleSong from "./SingleSong";

const RowSong = ({ artist }) => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs.songs);

  useEffect(() => {
    dispatch(getSongs(artist));
  }, []);

  return (
    <Container className="my-4">
      <h2>{artist}</h2>
      <Row>
        {songs.slice(0, 4).map((song) => (
          <SingleSong key={song.id} song={song} />
        ))}
      </Row>
    </Container>
  );
};

export default RowSong;
