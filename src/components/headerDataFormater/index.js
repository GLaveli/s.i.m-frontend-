import React from 'react';

export default function HeaderDataFormater(props) {
 let date = new Date("2013-03-10T02:00:00Z");
 let formatedDate = date.toISOString().substring(0, 10).split('-');
 let year = formatedDate[0];
 let day = formatedDate[1];
 let mouth = formatedDate[2];

 return (
  <span className= "budget-date">{day + '/' + mouth + '/' + year}</span>
 );
}
