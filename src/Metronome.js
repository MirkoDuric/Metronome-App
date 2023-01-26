import React, { useState } from "react";
import "./Metronome.css";

export default function Metronome() {
  const [playing, setPlaying] = useState(false);
  const [bpm, setBpm] = useState(100);
  return (
    <div className="metronome">
      <div className="bpm-slider">
        <div>{bpm} BPM</div>
        <input type="range" min="60" max="240" value={bpm} />
      </div>
      <button>{playing ? "Stop" : "Start"}</button>
    </div>
  );
}
