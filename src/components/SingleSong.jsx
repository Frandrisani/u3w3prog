import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
  selectSong,
} from "../redux/actions";

const SingleSong = ({ song }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.songs.favorites);

  const isFavorite = favorites.includes(song.id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(song.id));
    } else {
      dispatch(addToFavorites(song.id));
    }
  };

  const handleSelectSong = () => {
    dispatch(selectSong(song));
  };

  return (
    <Card>
      <Card.Img variant="top" src={song.album.cover_medium} alt={song.title} />
      <Card.Body>
        <Card.Title>{song.title}</Card.Title>
        <Button
          variant={isFavorite ? "danger" : "primary"}
          onClick={handleToggleFavorite}
        >
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </Button>
        <Button variant="info" onClick={handleSelectSong}>
          Play
        </Button>
      </Card.Body>
    </Card>
  );
};

export default SingleSong;
