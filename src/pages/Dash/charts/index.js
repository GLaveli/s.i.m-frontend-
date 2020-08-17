import React, { useEffect, useState } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

let charData = {
 labels: [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abriu',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro'],

 datasets: [{
  label: 'Cadastros / mês',
  data: [0, 15, 22, 18, 1, 50, 0, 13, 10, 10, 1, 5],

  backgroundColor: [
   'rgb(255,99,132,0.6)',
   'rgb(54,162,235,0.6)',
   'rgb(255,162,86,0.6)',
   'rgb(75,192,192,0.6)',
   'rgb(54,162,235,0.6)',
   'rgb(255,99,132,0.6)',
   'rgb(75,192,192,0.6)',
   'rgb(255,162,86,0.6)',
   'rgb(54,162,235,0.6)',
   'rgb(75,192,192,0.6)',
   'rgb(54,162,235,0.6)',
   'rgb(255,99,132,0.6)',
  ],
 }],
}


export default function Chart() {
 return (
  <>
   <Pie
    data={charData}
    width={700}
    height={300}
   />
  </>
 );
}
