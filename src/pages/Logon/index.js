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
  const [counter, setCounter] = useState(15);

  useEffect(() => {
    async function watcherFunction() {
      const { data } = await api.get('/');
      setWatcher(data.code);
    };

    let reloadPage = setTimeout(() => {
      if (setWatcher !== 0) {
        clearTimeout(reloadPage);
      }
      if (watcher === 0) {
        setCounter(counter - 1);
        watcherFunction();
      }
    }, 1000);

  }, [counter, watcher]);


  if (counter === 0) {
    if (watcher === 0) {
      window.location.reload();
    } else {
      clearTimeout()
    }
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
          localStorage.setItem('userFlag', response.data.flag);
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
        //Observa se a API esta online
        watcher !== 0 ?
          <img className="watcherImg" src={imgWatcherOn} alt="WatcherOff" />
          :
          <img className="watcherImg" src={imgWatcherOff} alt="WatcherOn" />
      }
      <ToastContainer />
      {
        watcher !== 0 ?
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
          :
          <div className="waitConnectionContainer">
            <h1 className="waitTitle">Não vá embora!</h1>
            <div className="waitText">Estamos fazendo uma verificação rapida na rede</div>
            <div className="waitCount">Só leva alguns segundos: {counter}... Aguarde!</div>
          </div>
      }
      <div>
        {/* Em breve Conteudo google play */}
      </div>
    </div>
  );
}