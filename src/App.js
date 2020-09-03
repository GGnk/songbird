import React from 'react';
import Game from './components/Game.jsx';
import BirdCategories from './components/BirdCategories.jsx';
import SecretBird from './components/SecretBird.jsx';
import GameOver from './components/GameOver.jsx';

const App = () => {
	return (
    <>
      <BirdCategories />
      <SecretBird />
      <Game />
      <GameOver />
    </>
  );
}

export default App;
