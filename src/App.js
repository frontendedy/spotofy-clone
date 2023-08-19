import { useEffect, useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Slider from './components/Slider';
import { getData } from './Api';

function App() {
  const [data, setData] = useState({
    topAlbums: [],
    newAlbums: []
  })

  useEffect(() => {
    getData('albums/top')
      .then(res =>
        setData({...data, topAlbums: res.data}))
      .catch(err => console.log(err))

  }, [data])

  useEffect(()=>{
    getData('albums/new')
    .then(res =>
      setData({...data, newAlbums: res.data}))
    .catch(err => console.log(err))
  },[data])
  
  return (
    <div className="App bg-black">
      <NavBar />
      <Hero />
      <Slider data={data.topAlbums} heading="Top Albums"/>
      <Slider data={data.newAlbums} heading="New Albums"/>
    </div>
  );
}

export default App;
