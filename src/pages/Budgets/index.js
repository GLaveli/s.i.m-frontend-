import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import { ToastContainer } from 'react-toastify';
import HeaderDataFormater from '../../components/headerDataFormater';
import BudgetSelectedItens from '../../components/budgetSelectedItens';
import api from '../../services/api';
import { successToast, warnToast } from '../../components/warnings/MyToast';

import { customToast } from '../../components/warnings/MyToast'

import logoText from '../../assets/logoText.png';
import hommer from '../../assets/hommer.png';

import './styles.css';

export default function Budgets() {

  const [budgets, setBudgets] = useState([]);
  const userName = localStorage.getItem('userName');
  const userId = localStorage.getItem('userId');
  let fisrtName = userName.split(' ');
  const history = useHistory();

  useEffect(() => {
    api.get('/showbudgets', {
      headers: {
        user_id: userId,
      }
    }).then(response => {
      setBudgets(response.data);
    });
  }, [userId]);

  function handleExit() {
    localStorage.setItem('userId', '');
    localStorage.setItem('userName', '');
    localStorage.setItem('userEmail', '');
    history.push('/');
    setTimeout(() => {
      customToast("Seus dados de navegação foram apagados ;)");
    }, 1000);
  }

  async function handleDelete(id) {
    try {
      let response = await api.delete(`/deletebudget/${id}`, {
        headers: {
          user_id: userId,
        }
      });
      setBudgets(budgets.filter(budget => budget._id !== id));
      successToast(response.data.message);
    } catch (err) {
      warnToast(err);
    }
  }

  //var today = new Date(),
  //date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

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

      <h1 className="centerItem">Meus orçamentos: {budgets.length} ao total</h1>
      <hr className="margin-botton" />

      <ul>
        {
          budgets.length === 0 ?
            <div className="emptyBudgetContainer">
              <h2 className="aliginText">Nem um orçamento encontrado!</h2>
              <img className="animatedLogo" src={hommer} alt="Logo animada" />
            </div>
            :
            budgets.map(budget => (
              <li key={budget._id}>
                <div className="budget-user">
                  <strong ><HeaderDataFormater isodate={budget.createdAt} /></strong>
                  <p>Por: {budget.user.name}</p>
                </div>
                <div className="budget-user">
                  <strong className="budget-title">{budget.title}</strong>
                </div>
                <div className="budget-user">
                  <section>
                    <p className="budget-description">{budget.description}</p>
                  </section>
                </div>
                <div className="budget-user">
                  <section>
                    <BudgetSelectedItens selectedItens={budget.selected_itens} />
                  </section>
                </div>
                <div className="budget-footer">
                  <strong >Valor: R$: {budget.price}</strong>
                </div>
                <button onClick={() => handleDelete(budget._id)} type="button">
                  <FiTrash2 className="FiTrash2" size={20} />
                </button>
              </li>
            ))
        }
      </ul>
    </div>
  );
}
