import React from 'react';
import { connect } from 'react-redux';
import fakeImage from '../assets/img/bird.jpg';


const SecretBird = (props) => {
  let image;
  let name;

  ({ image, name } = props.secretBird);

  if (!props.guessed) {
    ({ image, name } = { image: fakeImage, name: '***' });
  }
  const secretBird = props.secretBird;
  const visibility = !props.gameOver ? '' : 'none';


  return (
    <>
      <div className="random-bird jumbotron rounded" style={{ display: visibility }}>
        <img className="bird-image" src={image} alt={name} />
        <div>
          <ul className="list-group list-group-flush">
            <h3>{name}</h3>
            <li className="list-group-item">
              <div style={{ textAlign: 'center' }}>
                <audio src={secretBird.audio} className="birdAudion" controls autoPlay id="secretPlayer" />
              </div>
            </li>
          </ul>
        </div>

      </div>
    </>
  )
}

const mapStateToProps = state => ({
  birds: state.birds,
  birdCategory: state.birdCategory,
  secretBird: state.secretBird,
  guessed: state.guessed,
  gameOver: state.gameOver,
});


export default connect(mapStateToProps, null)(SecretBird);
