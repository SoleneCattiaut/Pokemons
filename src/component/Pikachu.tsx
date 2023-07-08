import React from "react";
import App from "../App";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
  } from "react-router-dom";
  import {
Button
  } from "@material-ui/core";
function Pikachu() {
  return (

      
      <Router>
        <div className="App">
      <img
        src="https://www.pngall.com/wp-content/uploads/5/Pokemon-Pikachu-PNG-Image-File.png"
        className="App-logo"
        alt="logo"
      />
      <br />
      <br />
      <h1>This is my friends !</h1>
          <Link to="/">Retour
            
          </Link>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
      </div>
      </Router>

  );
}

export default Pikachu
