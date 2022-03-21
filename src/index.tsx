import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

// class Button extends React.Component<any, any> {
//   render() {
//     return (
//       <button style={{ backgroundColor: "aqua" }}>{this.props.children}</button>
//     );
//   }
// }

// class Home extends React.Component<any, any> {
//   render() {
//     const nombre = "Joaquin";
//     //las llaves se usan para decirle a react que evalue la dif
//     const cosas = ["mate", "termo", "yerba"];
//     return (
//       <div>
//         Hola{" "}
//         {cosas.map((item) => (
//           <Button key={item}>{item}</Button>
//         ))}
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Home />, document.getElementById("root"));
