import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWroker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(<App />, document.getElementById("root"));
// registerServiceWroker();

// export default class componentName extends Component {
//   render() {
//     return (
//       <div> textInComponent </div>
//     );
//   }
// }
