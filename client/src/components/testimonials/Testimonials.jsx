import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Nick Stevens",
      title: "Senior Developer",
      img:
        "assets/dude.png",
      icon: "assets/twitter.png",
      desc:
        "SynthEd is the best site I've ever seen! Nothing has ever compared, and nothing ever will.",
    },
    {
      id: 2,
      name: "Joe Han",
      title: "Full-Stack Professor",
      img:
        "assets/jh.png",
      icon: "assets/youtube.png",
      desc:
        "I didn't fully understand what SynthEd has to offer at first, but it's so easy to use! It's now one of my favorite ways to show my creativity away from coding.",
      featured: true,
    },
    {
      id: 3,
      name: "Claire Go",
      title: "CEO of Giant Teddy Bears",
      img:
        "assets/lady.png",
      icon: "assets/linkedin.png",
      desc:
        "I love, love, love it!! I could spend hours on this site!",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}