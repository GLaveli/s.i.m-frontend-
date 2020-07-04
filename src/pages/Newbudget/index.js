import React, { useState, useEffect } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import api from '../../services/api';

import { customToast, errorToast } from '../../components/warnings/MyToast';
import ItemCount from '../../components/count';
import './styles.css'

export default function Newbudget() {
  const userId = localStorage.getItem('userId');

  const [servicesList, setServicesList] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [totalValue, seTotalValue] = useState('Valor aproximado de R$: 0,00');

  const history = useHistory();
  var currentTime = new Date()
  var day = currentTime.getDate();
  var month = currentTime.getMonth() + 1;
  var year = currentTime.getFullYear();

  useEffect(() => {
    async function getServices() {
      const response = await api.get('services');

      setServicesList(response.data);

    } getServices();
  }, []);

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
  console.log(servicesList);

  return (

    <div className="new-budget-container">
      <ToastContainer />
      <div className="content">
        <section>
          <div className="item-panel">
            <h4 className="item-panel-title"> TABELA DE PREÇOS MÉDIOS DE SERVIÇOS ELÉTRICOS EM {day + '/' + month + '/' + year} </h4>
            <div >
              <ul className="item-panel-body">
                {
                  servicesList.map((service) => (
                    <li key={service._id}>
                      <ItemCount
                        title={service.description}
                        priceAboveThreeWithCable={service.priceAboveThreeWithCable}
                        priceAboveThreeWithOutCable={service.priceAboveThreeWithOutCable}
                        priceWithCable={service.priceWithCable}
                        priceWithOutCable={service.priceWithOutCable}
                      />
                    </li>
                  ))
                }
              </ul>
            </div>
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
          <input className="centerText"
            value={totalValue} disabled={true}
          />

          <button className="button" type="submit">Enviar</button>
          <Link className="linkGoAndBack link-position" to="/budgets" >
            <FiArrowLeft size={16} color="#43415D" />
              Cancelar
           </Link>
        </form>
      </div>
    </div>
  );
}
