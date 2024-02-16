import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getSongs } from "../redux/actions";
import SingleSong from "./SingleSong";

const RowSong = ({ artist }) => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs.songs);
  const isLoading = useSelector((state) => state.songs.isLoading);

  useEffect(() => {
    dispatch(getSongs(artist));
  }, [dispatch, artist]);

  return isLoading ? (
    ""
  ) : (
    <Container className="my-4">
      <h2>{artist}</h2>
      <Row>
        {songs.slice(0, 8).map((song) => (
          <Col key={song.id} xs={3} className="g-3">
            <SingleSong song={song} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RowSong;
