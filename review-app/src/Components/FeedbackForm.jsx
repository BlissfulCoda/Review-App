import { useState } from "react";
import Card from "./Shared/Card";
import Button from "./Shared/Button";

export default function FeeddbackForm() {
  const [text, setText] = useState("");
  return (
    <Card className="input">
      <form>
        <h2>What would you rate this service ?</h2>
        <section className="input-group">
          <input type="text" placeholder="Enter a review" value={text} />
          <Button type="submit" >Click Me</Button>
        </section>
      </form>
    </Card>
  );
}

