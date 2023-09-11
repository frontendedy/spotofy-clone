import { useEffect, useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Slider from './components/Slider';
import { getData } from './Api';
import Faq from './components/Faq';
import Player from './components/Player';
import Section from './components/Section';

function App() {
  const [topAlbums, setTopAlbums] = useState([])
  const [newAlbums, setNewAlbums] = useState([])
  const [songs, setSongs] = useState([])
  const genere = ['All', 'Rock', 'Pop', 'Jazz', 'Blues']
  // const [genere, setGenere] = useState([])
  const [selected, setSelected] = useState('All')

  useEffect(() => {
    getData('albums/top')
      .then(res =>
        setTopAlbums(res.data))
      .catch(err => console.log(err))
      // console.log(topAlbums?.songs?.length)
  }, [])

  useEffect(() => {
    getData('albums/new')
      .then(res =>
        setNewAlbums(res.data))
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    getData('songs')
      .then(res =>
        setSongs(res.data))
      .catch(err => console.log(err))
  }, [selected])



  return (
    <div className="App bg-black pb-[200px]">
      <NavBar />
      <Hero />
      {/* <Slider data={topAlbums} heading="Top Albums" />
      <Slider data={newAlbums} heading="New Albums" /> */}
      <Section data={topAlbums} heading="Top Albums" />
      <Section data={newAlbums} heading="New Albums" />
      <Section data={songs} heading="Songs" genere={genere} selected={selected} setSelected={setSelected} />
      <Faq />
      <Player playing={true} />
    </div>
  );
}

export default App;
