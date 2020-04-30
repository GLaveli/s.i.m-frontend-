import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom'

import logoText from '../../assets/logoText.png';
import principal from '../../assets/SIM-gif-big.gif';

import './styles.css';

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoText} alt="logo" />
        <form>
          <h1>Faça seu Login</h1>

          <input placeholder="Credenciais" />
          <button className="button" type="submit">Logar</button>

          <Link className="linkGoAndBack" to="/register" >
            <FiLogIn size={16} color="#43415D" />
           Não tenho credenciais
           </Link>

          <Link className="linkGoAndBack" to="/works" >
            orçamentos (futuramente acessado com credencial)
           </Link>
        </form>
      </section>
      <img src={principal} alt="logo + texto" />
    </div>
  );
}