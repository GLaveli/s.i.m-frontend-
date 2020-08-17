import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import deadLink from '../../assets/404Link.png';

export default function NotFound() {
  return (
    <div className="container404">
      <div className="content">
        <div className="tittle">
          <h1>404</h1>
        </div>
        <p>Parece que você encontrou um link morto</p>
        <div className="img404">
          <img src={deadLink} />
        </div>
        <Link className="button404" to="/budgets">Me leve para um lugar seguro</Link>
      </div>
    </div>
  );
}
