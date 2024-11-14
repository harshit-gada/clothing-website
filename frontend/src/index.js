import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// import React from 'react';
// import ReactDOM from 'react-dom';
// // import { Component } from 'react';
// class Car extends React.Component{
//   constructor(){
//     super();
//     this.state={color:"red"};
//   }
//   render(){
//     return <h2> I am a {this.state.color}</h2>;
//   }
// }
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car/>)