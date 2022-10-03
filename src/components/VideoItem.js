import "./VideoItem.css";
import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  //console.log(video);
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <a className="header">{video.snippet.title}</a>
        {/* <div className="description">{video.snippet.description}</div> */}
      </div>
    </div>
  );
};

export default VideoItem;
