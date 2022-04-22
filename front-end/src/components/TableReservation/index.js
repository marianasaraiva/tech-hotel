import React, { useContext } from 'react';
import Context from '../../context/Context';


function TableReservation() {
  const { doneReservation } = useContext(Context);
  console.log('tabela', doneReservation);
  return (
    doneReservation &&
      <div>
        <table aling="center" border="1">
            <thead>
              <tr>
                <th>Nome completo</th>
                <th>E-mail</th>
                <th>Quarto</th>
                <th>Check-in</th>
                <th>Estadia</th>
                <th>Preço total da reserva</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{ doneReservation.client.fullName }</td>
                <td>{ doneReservation.client.email }</td>
                <td>{ doneReservation.rooms[0].type }</td>
                <td>{ doneReservation.checkIn }</td>
                <td>{ `${doneReservation.quantityDays} dias` }</td>
                <td>{ `R$ ${doneReservation.totalPrice},00` }</td>
              </tr>
            </tbody>
          </table>
      </div>
  )
}

export default TableReservation;
