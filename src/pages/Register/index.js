import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';

import logoText from '../../assets/logoText.png';

export default function Register() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img className="logo-register" src={logoText} alt="logo" />
          <h1>Credenciais de acesso?</h1>
          <p>Use as credenciais para acessar informaçoes de serviços prestados pela
            <strong> S.I.M Soluçôes</strong></p>
          <p>Para mais informaçoes <strong><Link className="orangeAlert" to="/termos" >clique aqui!</Link></strong> e leia os termos.</p>
          <br />
          <p className="redAlert"><strong> Nós não enviamos e-mails pedindo quaisquer informaçôes!</strong></p>

          <Link className="linkGoAndBack" to="/" >
            <FiArrowLeft size={16} color="#43415D" />
              Não quero me cadastrar!
           </Link>

        </section>

        <form>
          <input placeholder="Nome" />
          <input placeholder="Sobrenome" />
          <input placeholder="E-mail" />
          <input placeholder="CPF" />
          <input placeholder="Endereço" />

          <div className="input-group">
            <input placeholder="Cidade" />
            <input className="zero-margin" placeholder="UF" style={{ width: 80 }} />
          </div>

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}