import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { successToast, errorToast, warnToast } from '../../components/MyToast';

import api from '../../services/api';

import './styles.css';

import logoText from '../../assets/logoText.png';

export default function Register() {

  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [tell1, setTell1] = useState('');
  const [tell2, setTell2] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  async function handleRegister(event) {
    event.preventDefault();
    const data = {
      name, cpf, email, password, tell1, tell2, street, number, city, uf
    };

    if (name && cpf && email && password && street && number && city && uf) {
      if (password === rePassword) {
        try {
          const response = await api.post('sessions', data);

          if (response.data.email === email && response.data.code === 0) {
            warnToast('Email ja cadastrado');
          } else {
            successToast(`${response.data.email} foi registrado, Redirecionando`);
            setTimeout(() => {
              history.push('/');
            }, 2500);
          }

        } catch (err) {
          errorToast(`Erro ao tentar cadastrar: ${err}`);
        }
      } else {
        warnToast('As senhas não batem');
      }
    } else {
      warnToast('Todos os campos precisam ser preenchidos');
    }
  }

  return (
    <div className="register-container">
      <ToastContainer />
      <div className="content">
        <section>
          <img className="logo-register" src={logoText} alt="logo" />
          <h1>Credenciais de acesso?</h1>
          <p>Use as credenciais para acessar informaçoes de serviços prestados pela
            <strong> S.I.M Soluçôes</strong></p>
          <p>Para mais informaçoes <strong><Link className="orangeAlert" to="/termos" >clique aqui!</Link></strong> e leia os termos.</p>
          <p className="redAlert"><strong> Nós não enviamos e-mails pedindo quaisquer informaçôes!</strong></p>

          <Link className="linkGoAndBack" to="/" >
            <FiArrowLeft size={16} color="#43415D" />
              Já tenho uma conta
           </Link>

        </section>

        <form onSubmit={handleRegister}>
          <label>Dados pessoais</label>
          <input
            name=""
            placeholder="Nome completo"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            name=""
            placeholder="CPF"
            value={cpf}
            onChange={e => setCpf(e.target.value)}
          />

          <label>Dados de acesso</label>
          <input
            name=""
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)} />

          <div className="input-group">
            <input
              name=""
              placeholder="Senha"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <input
              name=""
              placeholder="re-senha"
              value={rePassword}
              onChange={e => setRePassword(e.target.value)}
            />
          </div>

          <label>Dados para contato</label>

          <div className="input-group">
            <input
              name=""
              placeholder="Telefone 1"
              value={tell1}
              onChange={e => setTell1(e.target.value)}
            />
            <input
              name="Telefone"
              placeholder="Telefone 2"
              value={tell2}
              onChange={e => setTell2(e.target.value)}
            />
          </div>

          <div className="input-group">
            <input
              name="Rua"
              placeholder="Rua"
              value={street}
              onChange={e => setStreet(e.target.value)}
            />
            <input
              name="Numero"
              className="zero-margin"
              placeholder="Numero"
              style={{ width: 120 }}
              value={number}
              onChange={e => setNumber(e.target.value)}
            />

          </div>

          <div className="input-group">
            <input
              name="Cidade"
              placeholder="Cidade"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <input
              name="UF"
              className="zero-margin upper-case"
              placeholder="UF"
              style={{ width: 60 }}
              maxLength="2"
              value={uf}
              onChange={e => setUf(e.target.value)}
            />
          </div>

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}