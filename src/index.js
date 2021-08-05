import React from "react";
import { render } from "react-dom";

import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "./slider-animations.css";
import "./styles.css";

const content = [
  {
    title: "Sea Saver",
    description: "Keep our seas clean.",
    button: "Donate Now",
    image:
      "https://images.unsplash.com/photo-1589634749000-1e72ec00a13f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80"
  },
  {
    title: "Sea Saver",
    description: "Keep our seas clean.",
    button: "Donate Now",
    image:
      "https://images.unsplash.com/photo-1621451537084-482c73073a0f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80"
  },
  {
    title: "Sea Saver",
    description: "Keep our seas clean.",
    button: "Donate Now",
    image:
      "https://lh3.googleusercontent.com/UCGVZ-V6mqyEOVvpAt50it37tmxNTORH2scg1W-fbL2gzIxc2N0PzaJPUNAb5mKQqXtmsdI5iWL6cq4aG6cp=w1921-h850-rw"
  }
];

const App = () => (
  <div>
    <Slider className="slider-wrapper">
      {content.map((item, index) => (
        <div
          key={index}
          className="slider-content"
          style={{ background: `url('${item.image}') no-repeat center center` }}
        >
          <div className="inner">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <button>{item.button}</button>
          </div>
        </div>
      ))}
    </Slider>
  </div>
);

render(<App />, document.getElementById("root"));
