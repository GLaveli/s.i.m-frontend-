import React, { useState, useEffect } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';


import api from '../../services/api';

import ItemTable from '../../components/itemTable';
import './styles.css'

export default function Newbudget() {

  const userId = localStorage.getItem('userId');

  const [servicesList, setServicesList] = useState([]);
  const [title, setTitle] = useState('');


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
  function handleSubmit(e) {
    e.preventDefault();

    getNewBudget();

  }

  async function getNewBudget() {

  }

  return (
    <div className="new-table-container">
      <ToastContainer />
      <div className="content">
        <section>
          <div className="item-panel">
            <h4 className="item-panel-title"> Tabela atual de produtos {day + '/' + month + '/' + year} </h4>
            <div>
              <ul className="item-panel-body">
                {
                  servicesList.map((service) => (
                    <li key={service._id} name="li-item-table">
                      <ItemTable
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

          <p>Titulo</p>
          <input
            placeholder="LÂMPADA FLUORESCENTE/ LED COMUM"
            value={title}
            onChange={event => setTitle(event.target.value)}
          />

          <div className="linha">

            <div className="coluna">
              <p>Valor com cabo</p>
              <input
                placeholder="RS:00,00"
                value={title}
                onChange={event => setTitle(event.target.value)}
              />
            </div>

            <div className="coluna">
              <p>Valor sem cabo</p>
              <input
                placeholder="RS:00,00"
                value={title}
                onChange={event => setTitle(event.target.value)}
              />
            </div>

          </div>
          <div className="linha">

            <div className="coluna">
              <p>Valor com cabo (3 uni.)</p>
              <input
                placeholder="RS:00,00"
                value={title}
                onChange={event => setTitle(event.target.value)}
              />
            </div>

            <div className="coluna">
              <p>Valor sem cabo (3 uni.)</p>
              <input
                placeholder="RS:00,00"
                value={title}
                onChange={event => setTitle(event.target.value)}
              />
            </div>

          </div>


          <button className="button" type="submit">Adicionar</button>
          <Link className="linkGoAndBack link-position" to="/dash" >
            <FiArrowLeft size={16} color="#43415D" />
              Voltar
           </Link>
        </form>
      </div>
    </div>
  );
}
