import React, { useState } from 'react';

function ReadMore({ text, maxLength }) {
    const [hidden, setHidden] = useState(true);
  
    // If the text is short enough, just render it
    if (text.length <= maxLength)
      return <span>{text}</span>;
  
    return (
      <span>
        <p>{hidden ? `${text.substr(0, maxLength)} ...` : text}</p>
        {hidden ?
          <button onClick={() => setHidden(false)}> read more</button> :
          <button onClick={() => setHidden(true)}> read less</button>
          }
      </span>
    );
  }

  export default ReadMore;