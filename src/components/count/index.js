import React, { useState } from 'react';

import './styles.css'

export default function Newbudget() {

 const [count, setCount] = useState(0);

 function handleIncrement() {

  setCount(count + 1)

 }
 function handleDecrement() {
  if (count <= 0) {
   setCount(0);
  } else {
   setCount(count - 1)
  }
 }
 return (

  <div className="list-iten">
   <div className="list-text">
    <p>Contador de itens !</p>
   </div>
   <div className="counter-block">
    <button className="countButton" onClick={() => { handleDecrement() }}>
     -
    </button>
    <div className="numberPane">
     <p className="numbers"> {count} </p>
    </div>
    <button className="countButton" onClick={() => { handleIncrement() }}>
     +
    </button>
   </div>
  </div>

 );
}
