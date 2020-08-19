import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';
import { ToastContainer } from 'react-toastify';

import api from '../../services/api';

import { customToast } from '../../components/warnings/MyToast';
import Chart from './charts';
import logoText from '../../assets/logoText.png';


import './styles.css';

export default function Dashboard() {

  const [getbasic, setBasic] = useState([0, 0])
  const userEmail = localStorage.getItem('userEmail');
  const userName = localStorage.getItem('userName');
  const userId = localStorage.getItem('userId');

  let fisrtName = userName.split(' ');
  const history = useHistory();

  useEffect(() => {
    api.get('getbasic', {
      headers: {
        user_id: userId,
        email: userEmail,
      }
    }).then(response => {
      console.log(response);
      setBasic(response.data);
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


  return (
    <div className="work-container">
      <ToastContainer />
      <header>
        <img className="animatedLogo" src={logoText} alt="Logo animada" />
        <span>Bem vindo, {fisrtName[0]}</span>

        <div className="buttonContainer">
          <Link className="buttonBudget" to="/budgets">Ver Orçamentos</Link>
          <Link className="buttonBudget" to="/newbudget">Editar tabela</Link>
        </div>

        <button type="button" onClick={handleExit}>
          <FiPower className="FiPower" size={18} />

        </button>
      </header>


      <h1 className="centerItem">Painel de controle</h1>
      <hr className="margin-botton" />

      <div className="cardContainer">

        <div className="card">
          <div className="cardheader">
            <h3>Registros</h3>
          </div>
          <div className="cardBody">
            <p>Registrados: {getbasic.countUser}</p>
            <p>Orçamentos: {getbasic.countBudget}</p>
            <p>Produtos: {getbasic.countService}</p>
            <p>Reprovados: 0</p>
          </div>
        </div>

        <div className="card">
          <div className="cardheader">
            <h3>Title 3</h3>
          </div>
          <div className="cardBody">
            <p>Registrados:</p>
            <p>Orçamentos:</p>
            <p>Aprovados:</p>
            <p>Reporvado:</p>
          </div>
        </div>

        <div className="card">
          <div className="cardheader">
            <h3>Title 4</h3>
          </div>
          <div className="cardBody">
            <p>Registrados:</p>
            <p>Orçamentos:</p>
            <p>Aprovados:</p>
            <p>Reporvado:</p>
          </div>
        </div>

        <div>
          <Chart />
        </div>

      </div>
    </div>
  );
}
