import React from 'react';
import VideoItem from '../video_item/video_item';

const VideoList = (props) => (
      <ul>
        {props.videos.map(vidio => <VideoItem video={vidio} key={vidio.id}/>)}
      </ul>
  );

export default VideoList;