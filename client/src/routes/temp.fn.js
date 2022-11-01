import * as Tone from "tone";

export function playNote(event) {
  if (event.keyCode === 81) {
    playC4();
  }
  if (event.keyCode === 50) {
    playDb4();
  }
  if (event.keyCode === 87) {
    playD4();
  }
  if (event.keyCode === 51) {
    playEb4();
  }
  if (event.keyCode === 69) {
    playE4();
  }
  if (event.keyCode === 82) {
    playF4();
  }
  if (event.keyCode === 53) {
    playGb4();
  }
  if (event.keyCode === 84) {
    playG4();
  }
  if (event.keyCode === 54) {
    playAb4();
  }
  if (event.keyCode === 89) {
    playA4();
  }
  if (event.keyCode === 55) {
    playBb4();
  }
  if (event.keyCode === 85) {
    playB4();
  }
  if (event.keyCode === 86) {
    playC5();
  }
  if (event.keyCode === 71) {
    playDb5();
  }
  if (event.keyCode === 66) {
    playD5();
  }
  if (event.keyCode === 72) {
    playEb5();
  }
  if (event.keyCode === 78) {
    playE5();
  }
  if (event.keyCode === 77) {
    playF5();
  }
  if (event.keyCode === 75) {
    playGb5();
  }
  if (event.keyCode === 188) {
    playG5();
  }
  if (event.keyCode === 76) {
    playAb5();
  }
  if (event.keyCode === 190) {
    playA5();
  }
  if (event.keyCode === 186) {
    playBb5();
  }
  if (event.keyCode === 191) {
    playB5();
  }
}

// octave 1 
export function playC1() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["C1"], 4);
  })
}

export function playDb1() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["Db1"], 4);
  })
}

export function playD1() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["D1"], 4);
  })
}

export function playEb1() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["Eb1"], 4);
  })
}

export function playE1() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["E1"], 4);
  })
}

export function playF1() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["F1"], 4);
  })
}

export function playGb1() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["Gb1"], 4);
  })
}

export function playG1() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["G1"], 4);
  })
}

export function playAb1() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["Ab1"], 4);
  })
}

export function playA1() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["A1"], 4);
  })
}

export function playBb1() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["Bb1"], 4);
  })
}

export function playB1() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["B1"], 4);
  })
}

// octave 2
export function playC2() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["C2"], 4);
  })
}

export function playDb2() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["Db2"], 4);
  })
}

export function playD2() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["D2"], 4);
  })
}

export function playEb2() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["Eb2"], 4);
  })
}

export function playE2() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["E2"], 4);
  })
}

export function playF2() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["F2"], 4);
  })
}

export function playGb2() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["Gb2"], 4);
  })
}

export function playG2() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["G2"], 4);
  })
}

export function playAb2() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["Ab2"], 4);
  })
}

export function playA2() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["A2"], 4);
  })
}

export function playBb2() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["Bb2"], 4);
  })
}

export function playB2() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["B2"], 4);
  })
}

// octave 3 
export function playC3() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["C3"], 4);
  })
}

export function playDb3() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["Db3"], 4);
  })
}

export function playD3() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["D3"], 4);
  })
}

export function playEb3() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["Eb3"], 4);
  })
}

export function playE3() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["E3"], 4);
  })
}

export function playF3() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["F3"], 4);
  })
}

export function playGb3() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["Gb3"], 4);
  })
}

export function playG3() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["G3"], 4);
  })
}

export function playAb3() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["Ab3"], 4);
  })
}

export function playA3() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["A3"], 4);
  })
}

export function playBb3() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["Bb3"], 4);
  })
}

export function playB3() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["B3"], 4);
  })
}

// octave 4
export function playC4() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["C4"], 4);
  })
}

export function playDb4() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["Db4"], 4);
  })
}

export function playD4() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["D4"], 4);
  })
}

export function playEb4() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["Eb4"], 4);
  })
}

export function playE4() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["E4"], 4);
  })
}

export function playF4() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["F4"], 4);
  })
}

export function playGb4() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["Gb4"], 4);
  })
}

export function playG4() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["G4"], 4);
  })
}

export function playAb4() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["Ab4"], 4);
  })
}

export function playA4() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["A4"], 4);
  })
}

export function playBb4() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["Bb4"], 4);
  })
}

export function playB4() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["B4"], 4);
  })
}

// octave 5
export function playC5() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["C5"], 4);
  })
}

export function playDb5() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["Db5"], 4);
  })
}

export function playD5() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["D5"], 4);
  })
}

export function playEb5() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["Eb5"], 4);
  })
}

export function playE5() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["E5"], 4);
  })
}

export function playF5() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["F5"], 4);
  })
}

export function playGb5() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["Gb5"], 4);
  })
}

export function playG5() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["G5"], 4);
  })
}

export function playAb5() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["Ab5"], 4);
  })
}

export function playA5() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["A5"], 4);
  })
}

export function playBb5() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["Bb5"], 4);
  })
}

export function playB5() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["B5"], 4);
  })
}

// octave 6
export function playC6() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["C6"], 4);
  })
}

export function playDb6() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["Db6"], 4);
  })
}

export function playD6() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["D6"], 4);
  })
}

export function playEb6() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["Eb6"], 4);
  })
}

export function playE6() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["E6"], 4);
  })
}

export function playF6() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["F6"], 4);
  })
}

export function playGb6() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["Gb6"], 4);
  })
}

export function playG6() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["G6"], 4);
  })
}

export function playAb6() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["Ab6"], 4);
  })
}

export function playA6() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["A6"], 4);
  })
}

export function playBb6() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["Bb6"], 4);
  })
}

export function playB6() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["B6"], 4);
  })
}

// octave7
export function playC7() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["C7"], 4);
  })
}

export function playDb7() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["Db7"], 4);
  })
}

export function playD7() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["D7"], 4);
  })
}

export function playEb7() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["Eb7"], 4);
  })
}

export function playE7() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["E7"], 4);
  })
}

export function playF7() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["F7"], 4);
  })
}

export function playGb7() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["Gb7"], 4);
  })
}

export function playG7() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["G7"], 4);
  })
}

export function playAb7() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["Ab7"], 4);
  })
}

export function playA7() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["A7"], 4);
  })
}

export function playBb7() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["Bb7"], 4);
  })
}

export function playB7() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["B7"], 4);
  })
}