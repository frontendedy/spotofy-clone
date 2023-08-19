import { useEffect, useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Slider from './components/Slider';
import { getData } from './Api';
import Faq from './components/Faq';
import Player from './components/Player';

function App() {
  const [topAlbums, setTopAlbums] = useState([])
  const [newAlbums, setNewAlbums] = useState([])

  useEffect(() => {
    getData('albums/top')
      .then(res =>
        setTopAlbums(res.data))
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    getData('albums/new')
      .then(res =>
        setNewAlbums(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="App bg-black pb-[200px]">
      <NavBar />
      <Hero />
      <Slider data={topAlbums} heading="Top Albums" />
      <Slider data={newAlbums} heading="New Albums" />
      <Faq />
      <Player playing={true} />
    </div>
  );
}

export default App;
