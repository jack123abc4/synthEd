import React, { useEffect } from 'react';
import "./Piano.css";
import {
  playC1,
  playDb1,
  playD1,
  playEb1,
  playE1,
  playF1,
  playGb1,
  playG1,
  playAb1,
  playA1,
  playBb1,
  playB1,

  playC2,
  playDb2,
  playD2,
  playEb2,
  playE2,
  playF2,
  playGb2,
  playG2,
  playAb2,
  playA2,
  playBb2,
  playB2,

  playC3,
  playDb3,
  playD3,
  playEb3,
  playE3,
  playF3,
  playGb3,
  playG3,
  playAb3,
  playA3,
  playBb3,
  playB3,

  playC4,
  playDb4,
  playD4,
  playEb4,
  playE4,
  playF4,
  playGb4,
  playG4,
  playAb4,
  playA4,
  playBb4,
  playB4,

  playC5,
  playDb5,
  playD5,
  playEb5,
  playE5,
  playF5,
  playGb5,
  playG5,
  playAb5,
  playA5,
  playBb5,
  playB5,

  playC6,
  playDb6,
  playD6,
  playEb6,
  playE6,
  playF6,
  playGb6,
  playG6,
  playAb6,
  playA6,
  playBb6,
  playB6,

  playC7,
  playDb7,
  playD7,
  playEb7,
  playE7,
  playF7,
  playGb7,
  playG7,
  playAb7,
  playA7,
  playBb7,
  playB7,
  playNote,
} from "./temp.fn.js";

// window.addEventListener('keydown', playNote);

const Piano = () => {
  useEffect(() => {
    window.addEventListener('keydown', playNote);
    return () => {
      window.removeEventListener('keydown', );
    };
  }, [])

  return (
    <div className="pianoKeys">
      <div className="piano">

        {/* octave 1 */}
        {/* <div className="white-key" onClick={playC1}></div>
        <div className="black-key" onClick={playDb1}></div>
        <div className="white-key" onClick={playD1}></div>
        <div className="black-key" onClick={playEb1}></div>
        <div className="white-key" onClick={playE1}></div>
        <div className="white-key" onClick={playF1}></div>
        <div className="black-key" onClick={playGb1}></div>
        <div className="white-key" onClick={playG1}></div>
        <div className="black-key" onClick={playAb1}></div>
        <div className="white-key" onClick={playA1}></div>
        <div className="black-key" onClick={playBb1}></div>
        <div className="white-key" onClick={playB1}></div> */}

        {/* octave 2 */}
        {/* <div className="white-key" onClick={playC2}></div>
        <div className="black-key" onClick={playDb2}></div>
        <div className="white-key" onClick={playD2}></div>
        <div className="black-key" onClick={playEb2}></div>
        <div className="white-key" onClick={playE2}></div>
        <div className="white-key" onClick={playF2}></div>
        <div className="black-key" onClick={playGb2}></div>
        <div className="white-key" onClick={playG2}></div>
        <div className="black-key" onClick={playAb2}></div>
        <div className="white-key" onClick={playA2}></div>
        <div className="black-key" onClick={playBb2}></div>
        <div className="white-key" onClick={playB2}></div> */}

        {/* octave 3 */}
        {/* <div className="white-key" onClick={playC3}></div>
        <div className="black-key" onClick={playDb3}></div>
        <div className="white-key" onClick={playD3}></div>
        <div className="black-key" onClick={playEb3}></div>
        <div className="white-key" onClick={playE3}></div>
        <div className="white-key" onClick={playF3}></div>
        <div className="black-key" onClick={playGb3}></div>
        <div className="white-key" onClick={playG3}></div>
        <div className="black-key" onClick={playAb3}></div>
        <div className="white-key" onClick={playA3}></div>
        <div className="black-key" onClick={playBb3}></div>
        <div className="white-key" onClick={playB3}></div>  */}

        {/* octave 4 */}
        <div className="white-key" onClick={playC4}>Q</div>
        <div className="black-key" onClick={playDb4}>2</div>
        <div className="white-key" onClick={playD4}>W</div>
        <div className="black-key" onClick={playEb4}>3</div>
        <div className="white-key" onClick={playE4}>E</div>
        <div className="white-key" onClick={playF4}>R</div>
        <div className="black-key" onClick={playGb4}>5</div>
        <div className="white-key" onClick={playG4}>T</div>
        <div className="black-key" onClick={playAb4}>6</div>
        <div className="white-key" onClick={playA4}>Y</div>
        <div className="black-key" onClick={playBb4}>7</div>
        <div className="white-key" onClick={playB4}>U</div>

        {/* octave 5 */}
        <div className="white-key" onClick={playC5}>V</div>
        <div className="black-key" onClick={playDb5}>G</div>
        <div className="white-key" onClick={playD5}>B</div>
        <div className="black-key" onClick={playEb5}>H</div>
        <div className="white-key" onClick={playE5}>N</div>
        <div className="white-key" onClick={playF5}>M</div>
        <div className="black-key" onClick={playGb5}>K</div>
        <div className="white-key" onClick={playG5}>,</div>
        <div className="black-key" onClick={playAb5}>L</div>
        <div className="white-key" onClick={playA5}>.</div>
        <div className="black-key" onClick={playBb5}>;</div>
        <div className="white-key" onClick={playB5}>/</div>

        {/* octave 6 */}
        {/* <div className="white-key" onClick={playC6}></div>
        <div className="black-key" onClick={playDb6}></div>
        <div className="white-key" onClick={playD6}></div>
        <div className="black-key" onClick={playEb6}></div>
        <div className="white-key" onClick={playE6}></div>
        <div className="white-key" onClick={playF6}></div>
        <div className="black-key" onClick={playGb6}></div>
        <div className="white-key" onClick={playG6}></div>
        <div className="black-key" onClick={playAb6}></div>
        <div className="white-key" onClick={playA6}></div>
        <div className="black-key" onClick={playBb6}></div>
        <div className="white-key" onClick={playB6}></div> */}

        {/* octave 7 */}
        {/* <div className="white-key" onClick={playC7}></div>
        <div className="black-key" onClick={playDb7}></div>
        <div className="white-key" onClick={playD7}></div>
        <div className="black-key" onClick={playEb7}></div>
        <div className="white-key" onClick={playE7}></div>
        <div className="white-key" onClick={playF7}></div>
        <div className="black-key" onClick={playGb7}></div>
        <div className="white-key" onClick={playG7}></div>
        <div className="black-key" onClick={playAb7}></div>
        <div className="white-key" onClick={playA7}></div>
        <div className="black-key" onClick={playBb7}></div>
        <div className="white-key" onClick={playB7}></div> */}
        
      </div>
    </div>
  );
}

export default Piano

