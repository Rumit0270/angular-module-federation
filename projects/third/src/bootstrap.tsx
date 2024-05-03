import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

export const mount = (el: HTMLElement) => {
  const root = ReactDOM.createRoot(el);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#root") as HTMLElement;

  if (!!devRoot) {
    mount(devRoot);
  }
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/// ----------------------- ///
// Export the react app as web component
// This is not necessary, but will allow us to scope CSS easily if we want.
// This is also a good practice to make the app more portable.
class Mfe3Element extends HTMLElement {
  connectedCallback() {
    console.log("react-element::init");

    window.React = React;
    const root = ReactDOM.createRoot(this);
    root.render(<App />);
  }

  disconnectedCallback() {
    console.log("react-element::destroy");
  }
}

customElements.define("react-element", Mfe3Element);
