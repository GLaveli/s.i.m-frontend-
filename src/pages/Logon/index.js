import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logoText from '../../assets/logoText.png';
import principal from '../../assets/principal.png';

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

          <a href="/register" > <FiLogIn size={16} color="#43415D" /> Não tenho credenciais </a>
        </form>
      </section>
      <img src={principal} alt="logo + texto" />
    </div>
  );
}