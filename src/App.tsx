import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import BrowserRouterProps from "react-router-dom";
import Pokemons from "./views/pokemons";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img
            src="https://cdn.vox-cdn.com/thumbor/TIS4Uk9NE0HQl4zP32WyBtfzhcM=/519x0:2480x1307/1400x1400/filters:focal(519x0:2480x1307):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/36999006/pikachu_welcome.0.0.jpg"
            className="App-logo"
            alt="logo"
          />
          <p>Welcome ! Click on "Friends" button to see my friends.</p>
          <Link className="buttonApp" to="/pokemons">
            Friends
          </Link>
        </header>
      </div>
      <Routes>
        <Route path="/pokemons" element={<Pokemons />} />
      </Routes>
    </Router>
  );
}

export default App;
