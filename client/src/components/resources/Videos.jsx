import { useEffect, useState } from "react";
import VideoList from "./VideoList";
import "./videos.scss";
import {
  musicTheory,
  pianoBasics,
  beginnerLessons,
  playAlong
} from "../../data";

export default function Videos() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "theory",
      title: "Music Theory",
    },
    {
      id: "basics",
      title: "Piano Basics",
    },
    {
      id: "lessons",
      title: "Lessons",
    },
    {
      id: "play",
      title: "Play Along",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "theory":
        setData(musicTheory);
        break;
      case "basics":
        setData(pianoBasics);
        break;
      case "lessons":
        setData(beginnerLessons);
        break;
      case "play":
        setData(playAlong);
        break;
      default:
        setData(musicTheory);
    }
  }, [selected]);

  return (
    <div className="videos" id="videos">
      <h1>Videos</h1>
      <ul>
        {list.map((item) => (
          <VideoList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}