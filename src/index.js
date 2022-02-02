// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import {choice,remove} from './helpers'
import foods from './foods'

const randomFruit=choice(foods)
console.log(`I'd like one ${randomFruit}, please
`)
console.log(`Here you go: ${randomFruit}`)
console.log('Delicious! May I have another?')
const removedFood=remove(foods,randomFruit)
console.log(`I’m sorry, we’re all out. We have ${foods.length} left.`)