import { useState } from "react";

const App = () => {
  const [walk, setWalk] = useState(0);
  const [bike, setBike] = useState(0);
  const [other, setOther] = useState(0);
  const [error, setError] = useState(false);
  return (
    <div className="container">
      <h1 className="title">
        CO<sub>2</sub> Converter
      </h1>
      <div className="description">
        Enter the distance that you travelled through a environmentally healthy
        method (walk, bike, etc.)! We will tell you how much CO<sub>2</sub> you
        helped reduce by not driving instead.
      </div>
      <div className="inputContainer">
        <div className="field">
          <span className="label">Distance walked: </span>
          <input
            className="input"
            type="number"
            value={walk}
            onChange={(e) => {
              setWalk(e.target.value);
              if (e.target.value < 0) {
                setWalk(0);
                setError(true);
                setTimeout(() => {
                  setError(false);
                }, 3000);
              }
            }}
          />
        </div>
        <div className="field">
          <span className="label">Distance biked: </span>
          <input
            className="input"
            type="number"
            value={bike}
            onChange={(e) => {
              setBike(e.target.value);
              if (e.target.value < 0) {
                setBike(0);
                setError(true);
                setTimeout(() => {
                  setError(false);
                }, 3000);
              }
            }}
          />
        </div>
        <div className="field">
          <span className="label">Other: </span>
          <input
            className="input"
            type="number"
            value={other}
            onChange={(e) => {
              setOther(e.target.value);
              if (e.target.value < 0) {
                setOther(0);
                setError(true);
                setTimeout(() => {
                  setError(false);
                }, 3000);
              }
            }}
          />
        </div>
      </div>
      {error && <div className="error">Distance cannot be less than 0!</div>}
      <div className="show">
        <span>Carbon you helped reduce: </span>
        <span className="amount">
          {122.4 * (parseFloat(walk) + parseFloat(bike) + parseFloat(other))} g
        </span>
      </div>
    </div>
  );
};

export default App;
