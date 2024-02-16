import React from "react";
import { Button, Card } from "react-bootstrap";
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
    <Card className="bg-dark text-white" onClick={handleSelectSong}>
      <Card.Img src={song.artist.picture_medium} alt={song.title} />
      <Card.ImgOverlay>
        <Card.Title>{song.title}</Card.Title>
        <Card.Text>Artist: {song.artist.name}</Card.Text>
        <Button
          variant={isFavorite ? "danger" : "light"}
          onClick={handleToggleFavorite}
        >
          {isFavorite ? "Rimuovi dai preferiti" : "Salva nei preferiti"}
        </Button>
      </Card.ImgOverlay>
    </Card>
  );
};

export default SingleSong;
