import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getSongs } from "../redux/actions";
import SingleSong from "./SingleSong";

const RowSong = ({ artist }) => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs.songs);

  useEffect(() => {
    dispatch(getSongs(artist));
  }, [dispatch, artist]);

  return (
    <Container className="my-4">
      <h2>{artist}</h2>
      <Row>
        {songs.slice(0, 4).map((song) => (
          <Col key={song.id}>
            <SingleSong song={song} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RowSong;
