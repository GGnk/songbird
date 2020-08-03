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
		gameEnd = false,
	 ] = useState(0);
	
	const gameover = gameEnd ? <GameOver/> : '';
	
	return (	
		<>
			<Header score={ score } funcScore={() => setScore(score +  1)}/>
			<Question/>
			<div className="row mb2">
				<Answers/>
				<Description/>
				<button className="btn">Next Level</button>
			</div>
			{ gameover }
		</>
	);
}

export default App;
