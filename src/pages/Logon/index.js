import React, { useState, useEffect } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import api from '../../services/api'

import { warnToast, errorToast } from '../../components/warnings/MyToast';

import logoText from '../../assets/logoText.png';
import imgWatcherOff from '../../assets/watcher/offLineStatus.png';
import imgWatcherOn from '../../assets/watcher/onLineStatus.png';

import './styles.css';

export default function Logon() {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [watcher, setWatcher] = useState(0);
  const [counter, setCounter] = React.useState(10);
  const [attempts, setAttempts] = React.useState(1);


  useEffect(() => {
    async function watcherFunction() {
      const { data } = await api.get('/');
      setWatcher(data.code);

    } watcherFunction();
  }, []);

  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  if (counter === 0 && watcher === 0) {
    window.location.reload();
  }

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

      {
        watcher !== 0 ?
          <img className="watcherImg" src={imgWatcherOn} alt="WatcherOff" />
          :
          <img className="watcherImg" src={imgWatcherOff} alt="WatcherOn" />
      }
      <ToastContainer />
      {
        watcher === 0 ?
          <div className="waitConnectionContainer">
            <h1 className="waitTitle">Não vá embora!</h1>
            <div className="waitText">Nosso servidor fica indisponivel de tempos em tempos para pouar recursos de memoria, mas vamos reconectar para você!</div>
            <div className="waitAttemps">Aguarde até <span className="spanAttempts">{attempts}/3</span> tentativas se o login não for apresentado, significa que estamos em manutenção</div>
            <div className="waitCount">nova tentativa em: {counter}</div>
          </div>
          :

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
            </form>
          </section>

      }
      <div>
        {/* Em breve Conteudo google play */}
      </div>
    </div>
  );
}