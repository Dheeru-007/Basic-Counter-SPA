import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        minHeight: "100vh",
        minWidth: "95vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "30px",
        textAlign: "center", // ensure text is centered
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#1e1e1e",
        color: "#ffffff",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "3rem", margin: 0 }}>Counter SPA</h1>
      <p style={{ fontSize: "2rem", margin: 0 }}>Count: {count}</p>

      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <button
          onClick={() => setCount(count + 1)}
          style={{
            padding: "15px 25px",
            fontSize: "1.5rem",
            cursor: "pointer",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#4caf50",
            color: "#fff",
          }}
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          style={{
            padding: "15px 25px",
            fontSize: "1.5rem",
            cursor: "pointer",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#f44336",
            color: "#fff",
          }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
