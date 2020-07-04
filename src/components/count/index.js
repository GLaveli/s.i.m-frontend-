import React, { useState } from 'react';

import './styles.css'

export default function Newbudget(props) {

 let [count, setCount] = useState(0);
 const [cable, setCable] = useState("0");
 const [subValor, setSubValor] = useState(0);
 let newCount;
 function handleIncrement() {
  newCount = count += 1;

  setCount(newCount);
  configureValor();

 }
 function handleDecrement() {
  if (count !== 0) {
   let newCount = count -= 1;

   setCount(newCount);
   configureValor();

  }
 }

 function configureValor() {

  if (cable === "0") {
   if (count <= 3) {
    setSubValor(props.priceWithOutCable * count);
   }
   if (count >= 4) {
    setSubValor(props.priceAboveThreeWithOutCable * count);
   }
  }

  if (cable === "1") {
   if (count <= 3) {
    setSubValor(props.priceWithCable * count);
   }
   if (count >= 4) {
    setSubValor(props.priceAboveThreeWithCable * count);
   }
  }
 }
 function handleDropdownChange(e) {
  configureValor();
  setSubValor(0);
  setCount(0);
  setCable(e.target.value);
 }
 return (
  <div className="item-container">

   <div className="item-title">
    <p>{props.title}</p>
   </div>

   <div className="item-body">
    <p>Cabeamento:</p>
    <div className="item-options">
     <select id="cableOtions" onChange={e => handleDropdownChange(e)}>
      <option value="0">Sem passagem de cabo</option>
      <option value="1">Com passagem de cabo</option>
     </select>
    </div>

    <div className="horizontal">
     <div className="coluna">
      <p> Valor:</p>
      <div className="item-values">
       <input className="input-values" type="text" value={subValor} onChange={() => configureValor()} disabled={true} />
      </div>
     </div>
     <div className="coluna">
      <p>Quantidade</p>
      <div className="counter-block">
       <button className="countButton" onClick={() => { handleDecrement() }}>-</button>
       <div className="numberPane">
        <p className="numbers"> {count} </p>
       </div>
       <button className="countButton" onClick={() => { handleIncrement() }}>+</button>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
}
