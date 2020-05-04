import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css'

import logoText from '../../assets/logoText.png';

export default function Newbudget() {
  return (

    <div className="budget-container">
      <div className="content">
        <section>
          <img className="logo-register" src={logoText} alt="logo" />
          <h1>Novo orçamento</h1>
          <p>...</p>

          <Link className="linkGoAndBack" to="/" >
            <FiArrowLeft size={16} color="#43415D" />
              Voltar
           </Link>
        </section>

        <form>
          <input placeholder="" />
          <textarea placeholder="" />

          <button className="button" type="submit">Cadastrar</button>

        </form>
      </div>
    </div>
  );
}
