import React, { useEffect, useState } from 'react';
import './app.css';

function App() {
  const [videos,setVideos] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxWidth=25&key=AIzaSyBFtWhYKei7L8SA-Hfy_-_oqZMfuT4S1G4", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  },[]);

  return <h1>Hello</h1>;
}

export default App;
