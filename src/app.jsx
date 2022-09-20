import { useEffect, useState } from 'react';
import styles from './app.module.css'
import SearchHeader from './components/search_header/SearchHeader';
import VideoList from './components/video_list/VideoList';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyA0u3LlFYH5HIkZCiqS5zSCzisQsCj4j6Q", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);
  return (
    <div className={styles.app}>
      <SearchHeader />
     <VideoList videos={videos} />
    </div>
  )
}

export default App;
