
import React, { useState } from 'react';
import Love from './Love.png';
import Sad from './Sad.png';
import Like from './Like.png';

function EmojiInput() {
  const [input, setInput] = useState('');
  const [emoji, setEmoji] = useState(null);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInput(value);

    if (value === 'Happy') {
      setEmoji(Love);
    } else if (value === 'Sad') {
      setEmoji(Sad);
    } else if (value === 'Like') {
      setEmoji(Like);
    } else {
      setEmoji(null);
    }
  };

  return (
    <div className="App">
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Type Happy, Sad or Like"
      />
      {emoji && <img src={emoji} alt="emoji" />}
    </div>
  );
}

export default EmojiInput;
