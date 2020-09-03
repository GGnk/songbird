import React from 'react';
import { connect } from 'react-redux';
import { setSelectedBird, scoreUp, nextLevel } from '../js/redux/actions/actions';
import okSound from '../assets/sounds/ok.wav'
import errorSound from '../assets/sounds/error.wav'
import sound from '../js/sound';

const Game = (props) => {
    const checkAnswer = (selection) => {
      if (props.secretBird.name === selection) {
        const secretPlayer = document.getElementById('secretPlayer');
        secretPlayer.pause();
        sound(okSound);
        props.scoreUp(selection)
      } else {
        props.setSelectedBird(selection);
        sound(errorSound);
      }
    };

    const selectedBird = props.selectedBird;
    const buttonClassname = !props.guessed ? 'btn' : 'btn btn-next';
    const visibility = !props.gameOver ? '' : 'none';
    const displayInstruction =  props.attemptCount === 0 ;

    const birdsItems = props.birdGroup.map(bird => (

      <li className={`list-group-item default ${bird.style}`} key={bird.id} onClick={() => checkAnswer(bird.name)}>
        <span className="li-btn" />
        {bird.name}
      </li>
    ));

    return (
      <>
        <div className="row mb2" style={{ display: visibility }}>
          <div className="col-md-6">
            <ul className="item-list list-group">
              {birdsItems}
            </ul>
          </div>
          <div className="col-md-6">
            <div className="bird-details card">
              <div className='alert alert-warning' style={{display:displayInstruction ? '' : 'none'}}><strong>Прослушайте аудио запись.</strong> Выберите правильный вариант из списка</div>
              <div className="card-body" style={{display:displayInstruction ? 'none' : ''}}>
                <img src={selectedBird.image} alt={selectedBird.name} className="bird-image" />
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <h4>{selectedBird.name}</h4>
                  </li>
                  <li className="list-group-item">
                    <span>{selectedBird.species}</span>
                  </li>
                  <li className="list-group-item">
                    <audio src={selectedBird.audio} controls autoPlay={false} className="birdAudion" />
                  </li>
                </ul>
              </div>
              <span className="bird-description" style={{display:displayInstruction ? 'none' : ''}}>
                {selectedBird.description}
              </span>

            </div>
          </div>
          <button onClick={props.nextLevel} className={buttonClassname} type="button" value="Next Level" disabled={!props.guessed}>Next level</button>
        </div>
      </>
    )
}

const mapStateToProps = state => ({
  birds: state.birds,
  birdCategory: state.birdCategory,
  secretBird: state.secretBird,
  selectedBird: state.selectedBird,
  guessed: state.guessed,
  birdGroup: state.birdGroup,
  gameOver: state.gameOver,
  score: state.score,
  attemptCount: state.attemptCount
});


const mapDispatchToProps = {
  setSelectedBird,
  scoreUp,
  nextLevel,
};


export default connect(mapStateToProps, mapDispatchToProps)(Game);
