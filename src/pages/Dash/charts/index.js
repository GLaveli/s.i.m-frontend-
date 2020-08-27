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
  label: 'Orçamentos / mês',
  data: [50, 15, 22, 18, 1, 50, 50, 1, 18, 22, 15, 50],
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
   <Line
    data={charData}
    width={700}
    height={300}
   />
  </>
 );
}
