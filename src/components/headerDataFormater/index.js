import React from 'react';

export default function HeaderDataFormater(props) {
 let date = new Date();
 let formatedDate = date.toISOString().substring(0, 10).split('-');
 let year = formatedDate[0];
 let day = formatedDate[2] - 1;
 let mouth = formatedDate[1];

 return (
  <span className="budget-date">{day + '/' + mouth + '/' + year}</span>
 );
}
