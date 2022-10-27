import * as Tone from "tone";

// export function playC4() {
//   const synth = new Tone.Synth().toDestination();
//   synth.triggerAttackRelease("C4", "8n");
// }

// export function playDb4() {
//   const synth = new Tone.Synth().toDestination();
//   synth.triggerAttackRelease("Db4", "8n");
// }

// export function playD4() {
//   const synth = new Tone.Synth().toDestination();
//   synth.triggerAttackRelease("D4", "8n");
// }

// export function playEb4() {
//   const synth = new Tone.Synth().toDestination();
//   synth.triggerAttackRelease("Eb4", "8n");
// }

// export function playE4() {
//   const synth = new Tone.Synth().toDestination();
//   synth.triggerAttackRelease("E4", "8n");
// }

// export function playF4() {
//   const synth = new Tone.Synth().toDestination();
//   synth.triggerAttackRelease("F4", "8n");
// }

// export function playGb4() {
//   const synth = new Tone.Synth().toDestination();
//   synth.triggerAttackRelease("Gb4", "8n");
// }

// export function playG4() {
//   const synth = new Tone.Synth().toDestination();
//   synth.triggerAttackRelease("G4", "8n");
// }

// export function playAb4() {
//   const synth = new Tone.Synth().toDestination();
//   synth.triggerAttackRelease("Ab4", "8n");
// }

// export function playA4() {
//   const synth = new Tone.Synth().toDestination();
//   synth.triggerAttackRelease("A4", "8n");
// }

// export function playBb4() {
//   const synth = new Tone.Synth().toDestination();
//   synth.triggerAttackRelease("Bb4", "8n");
// }

// export function playB4() {
//   const synth = new Tone.Synth().toDestination();
//   synth.triggerAttackRelease("B4", "8n");
// }

// export function playC5() {
//   const synth = new Tone.Synth().toDestination();
//   synth.triggerAttackRelease("C5", "8n");
// }

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

export function playNote(event) {
  if (event.keyCode === 65) {
    playC4();
  }

  if (event.keyCode === 87) {
    playDb4();
  }

  if (event.keyCode === 83) {
    playD4();
  }

  if (event.keyCode === 69) {
    playEb4();
  }

  if (event.keyCode === 68) {
    playE4();
  }

  if (event.keyCode === 70) {
    playF4();
  }

  if (event.keyCode === 84) {
    playGb4();
  }

  if (event.keyCode === 71) {
    playG4();
  }
  
  if (event.keyCode === 89) {
    playAb4();
  }

  if (event.keyCode === 72) {
    playA4();
  }

  if (event.keyCode === 85) {
    playBb4();
  }
  if (event.keyCode === 74) {
    playB4();
  }

  if (event.keyCode === 75) {
    playC5();
  }
}

