import spinner from "../assets/spinner.gif";

export default function Spinner() {
  return (
    <img
      style={{ width: "100px", margin: "auto", display: "block" }}
      src={spinner}
      alt="loading spinner image"
    />
  );
}
