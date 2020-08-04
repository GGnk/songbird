import React, { useState } from 'react';
import Header from '../components/header';
import Question from '../components/blockQuestion';
import Answers from '../components/blockAnswers';
import Description from '../components/blockDescription';
import GameOver from '../components/blockGameOver';
import '../assets/css/App.css';

function App() {
	const [
		// random = 0,
		// page = 0,
		// id = 0,
		// select = false,
		// win = false,
		score = 0,
		setScore,
		// step = 0,
	 ] = useState(0);
	
   const [gameEnd, setGameEnd] = useState(false);
	
   if(gameEnd) {
     return (
       <>
         <Header score={ score } funcScore={() => setScore(score +  1)}/>
         <GameOver/>
       </>
     )
   } else {
     return (
       <>
         <Header score={ score } funcScore={() => setScore(score +  1)}/>
         <Question/>
         <div className="row mb2">
           <Answers/>
           <Description/>
           <button className="btn">Next Level</button>
         </div>
       </>
     )
   }
}

export default App;
