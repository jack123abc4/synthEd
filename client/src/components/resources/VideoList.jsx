import "./videoList.scss";

export default function VideoList({ id, title, active, setSelected }) {
  return (
    <li
      className={active ? "videoList active" : "videoList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}