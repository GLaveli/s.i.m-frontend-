import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import logoText from '../../assets/logoText.png';

import './styles.css';

export default function Works() {

  var today = new Date(),
    date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();


  return (
    <div className="work-container">
      <header>
        <img className="animatedLogo" src={logoText} alt="Logo animada" />
        <span>Bem vindo, Invacdor</span>
        <Link className="button" to="/">Novo orçamento</Link>
        <button type="button">
          <FiPower className="FiPower" size={18} />
        </button>
      </header>

      <h1> Orçamentos </h1>

      <ul>
        <li>
          <strong>Orçamento em: {date}</strong>
          <p>Por: Weliton de Rezende</p>

          <strong>Instalação de ar-condicionado</strong>
          <p>Preciso de uma instalação predial de um ar consdicionado!</p>

          <strong>Valor:</strong>
          <p>R$: 620,00</p>

          <button>
            <FiTrash2 className="FiTrash2" size={20} />
          </button>
        </li>
        <li>
          <strong>Orçamento em: {date}</strong>
          <p>Por: Weliton de Rezende</p>

          <strong>Instalação de ar-condicionado</strong>
          <p>Preciso de uma instalação predial de um ar consdicionado!</p>

          <strong>Valor:</strong>
          <p>R$: 620,00</p>

          <button>
            <FiTrash2 className="FiTrash2" size={20} />
          </button>
        </li>
        <li>
          <strong>Orçamento em: {date}</strong>
          <p>Por: Weliton de Rezende</p>

          <strong>Instalação de ar-condicionado</strong>
          <p>Preciso de uma instalação predial de um ar consdicionado!</p>

          <strong>Valor:</strong>
          <p>R$: 620,00</p>

          <button>
            <FiTrash2 className="FiTrash2" size={20} />
          </button>
        </li>
        <li>
          <strong>Orçamento em: {date}</strong>
          <p>Por: Weliton de Rezende</p>

          <strong>Instalação de ar-condicionado</strong>
          <p>Preciso de uma instalação predial de um ar consdicionado!</p>

          <strong>Valor:</strong>
          <p>R$: 620,00</p>

          <button>
            <FiTrash2 className="FiTrash2" size={20} />
          </button>
        </li>
        <li>
          <strong>Orçamento em: {date}</strong>
          <p>Por: Weliton de Rezende</p>

          <strong>Instalação de ar-condicionado</strong>
          <p>Preciso de uma instalação predial de um ar consdicionado!</p>

          <strong>Valor:</strong>
          <p>R$: 620,00</p>

          <button>
            <FiTrash2 className="FiTrash2" size={20} />
          </button>
        </li>
      </ul>
    </div>
  );
}
