import React from 'react';
import Header from '../components/header';
import Question from '../components/blockQuestion';
import Answers from '../components/blockAnswers';
import Description from '../components/blockDescription';
import '../assets/css/App.css';

function App() {
  return (	
	<>
		<Header/>
		<Question/>
		<div className="row mb2">
			<Answers/>
			<Description/>
			<button className="btn">Next Level</button>
		</div>
	</>
  );
}

export default App;
