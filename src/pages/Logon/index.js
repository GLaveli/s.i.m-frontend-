import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import api from '../../services/api'

import { warnToast, errorToast } from '../../components/MyToast';

import logoText from '../../assets/logoText.png';
//import principal from '../../assets/SIM-gif-big.gif';


import './styles.css';

export default function Logon() {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    if (!email) {
      warnToast("É precido um E-mail para Logar");
    }
    if (!password) {
      warnToast("É precido uma Senha para Logar");
    }

    if (email && password) {
      try {
        const response = await api.post('logon', { email, password });


        if (response.data.message) {
          warnToast(response.data.message);
        }

        if (response.data.email === email) {
          localStorage.setItem('userId', response.data._id);
          localStorage.setItem('userName', response.data.name);
          localStorage.setItem('userEmail', response.data.email);
          history.push('/budgets');
        }
      } catch (err) {

        errorToast("Algo deu errado, tente mais tarde");
      }
    }


  }
  return (
    <div className="logon-container">
      <ToastContainer />
      <section className="form">
        <img src={logoText} alt="logo" />
        <form onSubmit={handleSubmit}>
          <h1>Faça seu Login</h1>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
          <button className="button" type="submit" onClick={handleSubmit}>Acessar</button>

          {/* ----------------------------------------------------------- */}

          <Link className="linkGoAndBack" to="/register" >
            <FiLogIn size={16} color="#43415D" />
           Não tenho credenciais
           </Link>

          <Link className="linkGoAndBack" to="/newbudget" >
            orçamentos (futuramente acessado com credencial)
           </Link>
          <Link className="linkGoAndBack" to="/budgets" >
            works (futuramente acessado com credencial)
           </Link>
        </form>
      </section>
      <div>
        {/* Em breve Conteudo google play */}
      </div>
    </div>
  );
}