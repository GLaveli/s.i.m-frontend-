import React, { useState, useEffect } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import api from '../../services/api';

import { customToast, errorToast } from '../../components/warnings/MyToast';
import ItemTable from '../../components/itemTable';
import './styles.css'

export default function Newbudget() {

  const userId = localStorage.getItem('userId');

  const [servicesList, setServicesList] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [totalValue, setTotalValue] = useState(0);
  const [selectedItens, setSelectedItens] = useState('');
  const [selectedItensObjct, setSelectedItensObjct] = useState({});

  const history = useHistory();
  var currentTime = new Date()
  var day = currentTime.getDate();
  var month = currentTime.getMonth() + 1;
  var year = currentTime.getFullYear();
  const MySwal = withReactContent(Swal)

  useEffect(() => {
    async function getServices() {
      const response = await api.get('services');
      setServicesList(response.data);
    } getServices();
  }, []);
  function hadleAlert() {
    alert('Yehh')
  }
  function handleSubmit(e) {
    e.preventDefault();

    if (totalValue === 0) {
      Swal.fire({
        title: 'Espere!!!',
        text: `Parece que você esqueceu de atualizar a cotação! para que os valores possam ser registrados você precisa clicar no botão laranja 'atualizar cotação', agora se deseja enviar só o texto, basta clicar em continuar`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#c03',
        confirmButtonText: 'Continuar',
        cancelButtonText: 'Esqueci de atualizar a cotação'
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            {
              title: 'Tudo OK!!!',
              text: "Seu orçamento foi enviado, agora é com a gente, se os seus dados cadastrados estiverem corretos logo entraremos em contato!",
              icon: 'success',
            }
          );
          getCuotation();
        }
      });
    } else {
      Swal.fire(
        {
          title: 'Tudo OK!!!',
          text: "Seu orçamento foi enviado, agora é com a gente, se os seus dados cadastrados estiverem corretos logo entraremos em contato!",
          icon: 'success',
        }
      );
      getCuotation();
    }
  }

  async function getCuotation() {

    let dataSave = day + '/' + month + '/' + year;
    let data = { title, description, totalValue, selectedItens, dataSave, selectedItensObjct }

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

  function handleCuotation() {
    let totalCuotationIputs = 0;
    let select = "";
    let liItemTable = document.querySelectorAll('li[name="li-item-table"]');
    let cuotationInputs = document.querySelectorAll('input[name="inputValue"]');
    let titleItemTable = document.querySelectorAll('p[name="itemTitle"]');
    let amountItemTable = document.querySelectorAll('p[name="p-count"]');
    let cableItemTable = document.querySelectorAll('#cableOtions :checked');
    let listObject = [];

    for (let i = 0; i < liItemTable.length; i++) {
      let itemObject = {};
      totalCuotationIputs += parseInt(cuotationInputs[i].value);

      if (amountItemTable[i].textContent > 0) {
        if (cableItemTable[i].value === '0') {
          itemObject.amount = amountItemTable[i].textContent;
          itemObject.title = titleItemTable[i].textContent;
          itemObject.cable = false;
          listObject.push(itemObject);
          select += amountItemTable[i].textContent + ' ' + titleItemTable[i].textContent + ' | ' + ' cabo: Não' + ',  ';

        } else {
          itemObject.amount = amountItemTable[i].textContent;
          itemObject.title = titleItemTable[i].textContent;
          itemObject.cable = true;
          listObject.push(itemObject);
          select += amountItemTable[i].textContent + ' ' + titleItemTable[i].textContent + ' | ' + ' cabo: Sim' + ', ';
        }

      }
    }
    setTotalValue(totalCuotationIputs);
    setSelectedItens(select);
    setSelectedItensObjct(listObject);
  }

  return (
    <div className="new-budget-container">
      <ToastContainer />
      <div className="content">
        <section>
          <div className="item-panel">
            <h4 className="item-panel-title"> TABELA DE PREÇOS MÉDIOS DE SERVIÇOS ELÉTRICOS EM {day + '/' + month + '/' + year} </h4>
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
          <button className="fitButton" onClick={() => handleCuotation()}>Atualizar Cotação</button>
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
          <input className="centerText fakeInput"
            value={`Valor aproximado de R$: ${totalValue},00`} disabled={true}
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
