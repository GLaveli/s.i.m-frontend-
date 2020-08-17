import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';
import { ToastContainer } from 'react-toastify';
import api from '../../services/api';

import { customToast } from '../../components/warnings/MyToast'

import logoText from '../../assets/logoText.png';


import './styles.css';

export default function TableEdit() {

  const userName = localStorage.getItem('userName');
  const userId = localStorage.getItem('userId');
  let fisrtName = userName.split(' ');
  const history = useHistory();

  useEffect(() => {
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
  return (
    <div className="work-container">
      <ToastContainer />
      <header>
        <img className="animatedLogo" src={logoText} alt="Logo animada" />
        <span>Bem vindo, {fisrtName[0]}</span>

        <div className="buttonContainer">
          <Link className="buttonBudget" to="/budgets">Ver Orçamentos</Link>
          <Link className="buttonBudget" to="/newbudget">Dashboard</Link>
        </div>

        <button type="button" onClick={handleExit}>
          <FiPower className="FiPower" size={18} />
        </button>
      </header>

      <h1 className="centerItem">Painel de controle</h1>
      <hr className="margin-botton" />



    </div>
  );
}
