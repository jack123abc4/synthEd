import "./story.scss";
import { useState } from "react";

export default function Story() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: 'assets/record.png',
      title: "What is SynthEd?",
      desc: "SynthEd is a free, easy-to-use online educational resource aimed at teaching anybody the fundamentals of music. ",
      img: "assets/who.png",
    },
    {
      id: "2",
      icon: "./assets/green.png",
      title: "Who are we?",
      desc: "Here at SynthEd, our primary focus is to help others learn and create their own pieces of music. Allowing anyone to creatively express themselves with our easy to use beats!",
      img: "assets/trio.png",
    },
    {
      id: "3",
      icon: "./assets/red.png",
      title: "What are you waiting for? ",
      desc: "It's your turn to try SynthEd!",
      img: "assets/wave.png",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="story" id="story">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="story-container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2 style={({color: 'black'})}>{d.title}</h2>
                  <p>{d.desc}</p>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick("right")}
      />
    </div>
  );
}