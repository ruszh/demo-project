import React, { Component } from "react";

class Preloader extends Component {
  render() {
    return (
      <div>
        <img
          className="preloader"
          src="https://camo.githubusercontent.com/a1a81b0529517027d364ee8432cf9a8bd309542a/687474703a2f2f692e696d6775722e636f6d2f56446449444f522e676966"
          alt="preloader"
        />
      </div>
    );
  }
}

export default Preloader;
