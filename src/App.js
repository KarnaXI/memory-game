import './App.css';
import React, { useState } from 'react';
import randomizeCharacters from './components/Characters';
import Cards from './components/Cards';

function App() {
  const [score, setScore] = useState(0);
  let [bestScore, setBestScore] = useState(0);
  const [clickedCharacters, setClickedCharacters] = useState([]);

  function handleClick(id){
    if(clickedCharacters.includes(id)){
      if(score > bestScore){
        setBestScore(bestScore=score)
        setScore(0);
      }
      else{
        setScore(0);
      }
      setClickedCharacters([]);
    }
    else{
      setScore(score+1);
      setClickedCharacters(([...clickedCharacters, id]));
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='header-title'>
          <h1 className="site-title">Memory Game</h1>
          <div className='instructions-scores'>
            <div className='instructions'>
              <p>Welcome, click on any character to begin. Be careful not to click the same character twice!</p>
            </div>
            <div className="score-container">
              <p><strong>Score:</strong> {score}</p>
              <p><strong>Best Score:</strong> {bestScore}</p>
            </div>
          </div>

        </div>
      </header>
      <div className='cards-container'>
          {randomizeCharacters().map((character) => <Cards key={character.id} character={character} handleClick={handleClick}/>)}
        </div>
    </div>
  );
}

export default App;
