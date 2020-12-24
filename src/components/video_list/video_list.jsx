import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';

const VideoList = (props) => (
      <ul className={styles.videos}>
        {props.videos.map(vidio => <VideoItem video={vidio} key={vidio.id}/>)}
      </ul>
  );

export default VideoList;