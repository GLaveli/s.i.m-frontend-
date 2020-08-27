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

        <button type="button" onClick={handleExit}>
          <FiPower className="FiPower" size={18} />
        </button>

        <span>Bem vindo, {fisrtName[0]}</span>

        <div className="buttonContainer">
          <Link className="buttonBudget" to="/budgets">Ver Orçamentos</Link>
          <Link className="buttonBudget" to="/table">Editar tabela</Link>
        </div>


      </header>


      <h1 className="centerItem">Painel de controle</h1>
      <hr className="margin-botton" />

      <div className="cardContainer">

        <div className="card">
          <div className="cardHeader">
            <h3>Registros</h3>
          </div>
          <div className="cardBody">
            <p className="dashTextInfo">Clientes: {getbasic.countUser}</p>
            <p className="dashTextInfo">Orçamentos: {getbasic.countBudget}</p>
            <p className="dashTextInfo">Produtos: {getbasic.countService}</p>
            <p className="dashTextInfo" >Aprovados: 0</p>
            <p className="dashTextInfo" >Reprovados: 0</p>
          </div>
        </div>

        <div>
          <Chart />
        </div>

      </div>
    </div>
  );
}
