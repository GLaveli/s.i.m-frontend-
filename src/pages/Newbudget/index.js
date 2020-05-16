import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import api from '../../services/api';

import { customToast, errorToast } from '../../components/MyToast';

import './styles.css'

//import logoText from '../../assets/logoText.png';

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

    <div className="new-budget-container">
      <ToastContainer />
      <div className="content">
        <section>
          <div className="iten-panel">
            <ul>
              <h2>Tag01</h2>
              <li>
                <div className="list-iten">
                  <div className="list-text">
                    <p>Item 01 esta a venda!</p>
                  </div>
                  <div className="counter-block">
                    <button id="btn-counter" > - </button>
                    <input className="display-counter" type="number" value="0" />
                    <button id="btn-counter" > + </button>
                  </div>
                </div>
              </li>
              <li>
                <div className="list-iten">
                  <div className="list-text">
                    <p>Item 01 esta a venda!</p>
                  </div>
                  <div className="counter-block">
                    <button id="btn-counter" > - </button>
                    <input className="display-counter" type="number" value="0" />
                    <button id="btn-counter" > + </button>
                  </div>
                </div>
              </li>

              <li>
                <div className="list-iten">
                  <div className="list-text">
                    <p>Item 01 esta a venda!</p>
                  </div>
                  <div className="counter-block">
                    <button id="btn-counter" > - </button>
                    <input className="display-counter" type="number" value="0" />
                    <button id="btn-counter" > + </button>
                  </div>
                </div>
              </li>
              <h2>Tag02</h2>
              <li>
                <div className="list-iten">
                  <div className="list-text">
                    <p>Item 01 esta a venda!</p>
                  </div>
                  <div className="counter-block">
                    <button id="btn-counter" > - </button>
                    <input className="display-counter" type="number" value="0" />
                    <button id="btn-counter" > + </button>
                  </div>
                </div>
              </li>

              <li>
                <div className="list-iten">
                  <div className="list-text">
                    <p>Item 01 esta a venda!</p>
                  </div>
                  <div className="counter-block">
                    <button id="btn-counter" > - </button>
                    <input className="display-counter" type="number" value="0" />
                    <button id="btn-counter" > + </button>
                  </div>
                </div>
              </li>

              <li>
                <div className="list-iten">
                  <div className="list-text">
                    <p>Item 01 esta a venda!</p>
                  </div>
                  <div className="counter-block">
                    <button id="btn-counter" > - </button>
                    <input className="display-counter" type="number" value="0" />
                    <button id="btn-counter" > + </button>
                  </div>
                </div>
              </li>

              <li>
                <div className="list-iten">
                  <div className="list-text">
                    <p>Item 01 esta a venda!</p>
                  </div>
                  <div className="counter-block">
                    <button id="btn-counter" > - </button>
                    <input className="display-counter" type="number" value="0" />
                    <button id="btn-counter" > + </button>
                  </div>
                </div>
              </li>
              <h2>Tag03</h2>
              <li>
                <div className="list-iten">
                  <div className="list-text">
                    <p>Item 01 esta a venda!</p>
                  </div>
                  <div className="counter-block">
                    <button id="btn-counter" > - </button>
                    <input className="display-counter" type="number" value="0" />
                    <button id="btn-counter" > + </button>
                  </div>
                </div>
              </li>

              <li>
                <div className="list-iten">
                  <div className="list-text">
                    <p>Item 01 esta a venda!</p>
                  </div>
                  <div className="counter-block">
                    <button id="btn-counter" > - </button>
                    <input className="display-counter" type="number" value="0" />
                    <button id="btn-counter" > + </button>
                  </div>
                </div>
              </li>

              <li>
                <div className="list-iten">
                  <div className="list-text">
                    <p>Item 01 esta a venda!</p>
                  </div>
                  <div className="counter-block">
                    <button id="btn-counter" > - </button>
                    <input className="display-counter" type="number" value="0" />
                    <button id="btn-counter" > + </button>
                  </div>
                </div>
              </li>

              <li>
                <div className="list-iten">
                  <div className="list-text">
                    <p>Item 01 esta a venda!</p>
                  </div>
                  <div className="counter-block">
                    <button id="btn-counter" > - </button>
                    <input className="display-counter" type="number" value="0" />
                    <button id="btn-counter" > + </button>
                  </div>
                </div>
              </li>

              <li>
                <div className="list-iten">
                  <div className="list-text">
                    <p>Item 01 esta a venda!</p>
                  </div>
                  <div className="counter-block">
                    <button id="btn-counter" > - </button>
                    <input className="display-counter" type="number" value="0" />
                    <button id="btn-counter" > + </button>
                  </div>
                </div>
              </li>

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
            placeholder="Valor aproximaxo"
            value={'Valor total de R$:' + price}
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
