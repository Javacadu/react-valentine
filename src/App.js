import Jikki from './Jikki.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 +16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
    ]

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className='App'>
      <header className='App-header'>
        {yesPressed ? (
          <>
            <img src='https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif' alt='Bear Kiss' />
            <div> Okie yey hehe </div>
          </>
        ) : (
          <>
            <img src={Jikki} className='valentines-pic' alt='Jikki' />

            <p>
              Will you be my Valentine?

              <br></br>

              <button className='yes-button' style={{ fontSize: yesButtonSize }} onClick={() => setYesPressed(true)}>
                Yes
              </button>

              <button onClick={handleNoClick} className='no-button'>
                {noCount === 0 ? 'No' : getNoButtonText()}
              </button>
            </p>
          </>
        )}
      </header>
    </div>
  );
}

export default App;

