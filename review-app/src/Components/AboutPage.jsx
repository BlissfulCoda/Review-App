import Card from "./Shared/Card";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <Card className="about">
      <h1>About Me Page</h1>
      <h3>Version: 1.0.0</h3>
      <Link to="/">Back to the homepage</Link>
    </Card>
  );
}
