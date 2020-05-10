import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import { ToastContainer } from 'react-toastify';

import api from '../../services/api';

import { customToast } from '../../components/MyToast'

import logoText from '../../assets/logoText.png';

import './styles.css';

export default function Budgets() {
  const userName = localStorage.getItem('userName');
  const userId = localStorage.getItem('userId');
  let fisrtName = userName.split(' ')
  const history = useHistory();

  useEffect(() => {
    api.get('', {
      headers: {
        user_id: userId,
      }
    }).then(response => {

    });
  }, []);

  function handleExit() {
    localStorage.setItem('userId', '');
    localStorage.setItem('userName', '');
    localStorage.setItem('userEmail', '');
    history.push('/');
    setTimeout(() => {
      customToast("Seus dados de navegação foram apagados ;)");
    }, 1000);
  }

  var today = new Date(),
    date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();


  return (
    <div className="work-container">
      <ToastContainer />
      <header>
        <img className="animatedLogo" src={logoText} alt="Logo animada" />
        <span>Bem vindo, {fisrtName[0]}</span>
        <Link className="button" to="/newbudget">Novo orçamento</Link>

        <button type="button" onClick={handleExit}>
          <FiPower className="FiPower" size={18} />
        </button>
      </header>

      <h1>Meus orçamentos:</h1>

      {



      }

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
