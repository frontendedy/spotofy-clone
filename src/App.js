import './App.css';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Slider from './components/Slider';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <Slider/>
    </div>
  );
}

export default App;
