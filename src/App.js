import Nav from './Components/Nav';
import Player from './Components/Player';
import Musics from './Components/Musics';
import './Styles/main.scss';

function App() {
  return (
    <div className="music-app">
      <Nav />
      <Player />
      <Musics />
    </div>
  );
}

export default App;
