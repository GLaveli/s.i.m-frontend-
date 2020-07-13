import React, { useState } from 'react';

export default function BudgetSelectedItens(props) {

 let itens = props.selectedItens;
 let splitedItens = itens.split(',');

 return (
  <>
   {
    splitedItens.map((item, i) => (
     <p key={i}>{item}</p>
    ))
   }
  </>
 );
}
