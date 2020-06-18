import React from 'react';
// import logo from './logo.svg';
import './App.css';
import RenderApp from './Component/RenderApp.js'
function App() {
  const styles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
    background: "linen"
  }
  return (
    <div className="container" style={styles}>
        <RenderApp />
    </div>
  );
}

export default App;
