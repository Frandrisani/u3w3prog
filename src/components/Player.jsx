import React from "react";
import { useSelector } from "react-redux";

const Player = () => {
  const selectedSong = useSelector((state) => state.songs.selectedSong);
  return (
    <div className="container-fluid fixed-bottom bg-container pt-1">
      <div className="row h-100">
        <div className="col-lg-10 offset-lg-2">
          <div className="row h-100 flex-column justify-content-center align-items-center">
            <div>
              <p className="text-white">
                {selectedSong ? selectedSong.title : ""}
              </p>
            </div>
            <div className="col-6 col-md-4 playerControls">
              <div className="d-flex">
                <a href="#link">
                  <img src="/playerbuttons/shuffle.png" alt="shuffle" />
                </a>
                <a href="#link">
                  <img src="/playerbuttons/prev.png" alt="prev" />
                </a>
                <a href="#link">
                  <img src="/playerbuttons/play.png" alt="play" />
                </a>
                <a href="#link">
                  <img src="/playerbuttons/next.png" alt="next" />
                </a>
                <a href="#link">
                  <img src="/playerbuttons/repeat.png" alt="repeat" />
                </a>
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
