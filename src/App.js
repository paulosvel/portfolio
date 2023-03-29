import "./App.css";

function App() {
  return (
    <div className="App">
      <h1
        style={{
          fontSize: "16px",
          fontFamily:
            '"SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace',
          margin: "0",
        }}
      >
        Hi, my name is
      </h1>
      <p style={{ fontSize: "80px", margin: "0", fontWeight: "bold" }}>
        Paulos Velissarakos.
      </p>
      <p
        style={{
          color: "#8892B0",
          fontSize: "80px",
          margin: "0",
          fontFamily:
            '"Calibre","Inter","San Francisco","SF Pro Text",-apple-system,system-ui,sans-serif"',
          fontWeight: "bold",
        }}
      >
        I build things for the web.
      </p>
      <p
        style={{
          color: "#8892B0",
          fontFamily:
            '"Calibre","Inter","San Francisco","SF Pro Text",-apple-system,system-ui,sans-serif',
          width: "40%",
          fontSize: "20",
        }}
      >
        I am a self-taught full stack developer with a passion for building web
        applications. Through self-directed learning and practical application,
        I have gained a deep understanding of both front-end and back-end
        development.
      </p>
    </div>
  );
}

export default App;
