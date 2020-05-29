import React, { useState, useEffect } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import api from '../../services/api';

import { customToast, errorToast } from '../../components/MyToast';

import './styles.css'

export default function Newbudget() {
  const userId = localStorage.getItem('userId');

  const [servicesList, setServicesList] = useState([]);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    let data = { title, description }

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

  useEffect(() => {
    async function getServices() {
      const response = await api.get('services');

      setServicesList(response.data);

    } getServices();
  }, []);


  return (

    <div className="new-budget-container">
      <ToastContainer />
      <div className="content">
        <section>
          <div className="iten-panel">
            <ul>
              <h2>Tag01</h2>
              {
                servicesList.map((service) => (
                  <li key={service._id}>
                    <div className="list-iten">
                      <div className="list-text">
                        <p>Item 01 esta a venda!</p>
                      </div>
                      <div className="counter-block">
                        <button id="btn-counter" > - </button>
                        <input className="display-counter" type="number" />
                        <button id="btn-counter" > + </button>
                      </div>
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>
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
            value="RS: 00,00"
            onChange={event => setDescription(event.target.value)}
          />

          <button className="button" type="submit">Cadastrar</button>
          <Link className="linkGoAndBack link-position" to="/budgets" >
            <FiArrowLeft size={16} color="#43415D" />
              Cancelar
           </Link>
        </form>
      </div>
    </div>
  );
}
