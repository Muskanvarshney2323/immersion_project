import React, { useState } from "react";

function App() {
  const [progress, setProgress] = useState(0);

  const handleIncrease = () => {
    setProgress((prev) => (prev < 100 ? prev + 10 : 100));
  };

  return (
    <div style={{ width: "300px", margin: "50px auto" }}>
      <div
        style={{
          height: "30px",
          width: "100%",
          backgroundColor: "#e0e0de",
          borderRadius: "5px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            backgroundColor: "#76c7c0",
            transition: "width 0.3s",
          }}
        />
      </div>
      <p>{progress}%</p>
      <button onClick={handleIncrease} style={{ marginTop: "10px" }}>
        Increase Progress
      </button>
    </div>
  );
}

export default App;