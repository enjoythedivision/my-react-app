import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const Card = ({ title, rating, isCool }) => {
  const [hasLiked, setHasLiked] = useState(false);

  return (
    <div className="card">
      <h2>{title}</h2>
      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? "Liked!" : "Like"}
      </button>
    </div>
  );
};

const App = () => {

  return (
    <div className="card-container">
      <h2>Arrow component!</h2>
      <Card title="Star Wars" rating={5} isCool={true} />
      <Card title="My Card Title" />
      <Card title="My Card Title" />
    </div>
  );
};

export default App;
