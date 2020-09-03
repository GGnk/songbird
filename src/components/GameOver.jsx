import React from 'react';
import { connect } from 'react-redux';
import { startAgain } from '../js/redux/actions/actions';


const GameOver = (props) => {
  const visibility = props.gameOver && props.score !== 30 ? 'block' : 'none';
  const superVisibility = props.gameOver && props.score === 30 ? 'block' : 'none';

  const score = `Вы прошли викторину и набрали: ${props.score} из 30`;
  return (
    <>
      <div className="jumbotron game-over" style={{ display: visibility }}>
        <h1 className="display-3 text-center">Поздравляем!</h1>
        <p className="lead text-center">{score}</p>
        <button className="btn btn-next btn-game-over" type="button" onClick={props.startAgain}>Попробовать еще раз!</button>
      </div>
      <div className="jumbotron game-over" style={{ display: superVisibility }}>
        <h1 className="display-3 text-center">Поздравляем! ВЫ АБСОЛЮТНЫЙ ЧЕМПИОН!</h1>
        <p className="lead text-center">Вы набрали 30 из 30 возможных балллов!</p>
        <button className="btn btn-next btn-game-over" type="button" onClick={props.startAgain}>Попробовать еще раз!</button>
      </div>
    </>
  )
}

const mapDispatchToProps = {
  startAgain,
};

const mapStateToProps = state => ({
  gameOver: state.gameOver,
  score: state.score,
});

export default connect(mapStateToProps, mapDispatchToProps)(GameOver);
