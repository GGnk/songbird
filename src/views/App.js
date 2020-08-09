import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import Question from '../components/blockQuestion';
import Answers from '../components/blockAnswers';
import Description from '../components/blockDescription';
import GameOver from '../components/blockGameOver';
import '../assets/css/App.css';


function App() {
	const [score, setScore] = useState(0);
	const [gameEnd, setGameEnd] = useState(false);
	const [page, setPage] = useState(0);
	const [random, setRandom] = useState(0);
	const [select, setSelect] = useState(false);
	const [step, setStep] = useState(0);
	const [id, setId] = useState(0);
	const [win, setWin] = useState(false);

	useEffect(() => {
		console.log(score)
	})
   const header = <Header score={ score } page={ page }/>
	
   if(gameEnd) {
     return (
       <>
         {header}
         <GameOver/>
       </>
     )
   } else {
     return (
       <>
         {header}
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
