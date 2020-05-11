import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import api from '../../services/api';

import { customToast, warnToast, errorToast } from '../../components/MyToast';

import './styles.css'

import logoText from '../../assets/logoText.png';

export default function Newbudget() {
  const userId = localStorage.getItem('userId');

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    let data = { title, description, price }

    const response = await api.post('newbudget', data, {
      headers: {
        user_id: userId,
      },
    });

    if (response.data.code === 0) {
      errorToast(response.data.message);
      setTimeout(() => {
        history.push('/');
        errorToast("Você precisa estar logado");
      }, 3000);
    } else {
      customToast("Validando dados!");
      setTimeout(() => {
        history.push('/budgets');
        customToast("Orçamento enviado!");
      }, 3000);
    }

  }



  return (

    <div className="budget-container">
      <ToastContainer />
      <div className="content">
        <section>
          <img className="logo-register-newbudget" src={logoText} alt="logo" />
          <h1>Novo orçamento</h1>
          <p>Descreva a sua necessidade e clique em enviar,
             assim que possivel entraremos em contato</p>

          <Link className="linkGoAndBack" to="/budgets" >
            <FiArrowLeft size={16} color="#43415D" />
              Voltar para home
           </Link>
        </section>

        <form onSubmit={handleSubmit}>
          <input
            placeholder="Titulo (Opcional)"
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
          <textarea
            className="scroll-bar"
            placeholder="Descrição"
            value={description}
            onChange={event => setDescription(event.target.value)}
          />
          <input
            placeholder="Valor aproximaxo"
            value={'Valor total de R$:' + price}
          />

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
