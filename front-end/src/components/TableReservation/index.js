import React, { useContext } from 'react';
import Context from '../../context/Context';
import { Table } from './styles';


function TableReservation() {
  const { doneReservation } = useContext(Context);

  return (
    doneReservation.length !== 0 &&
      <Table>
          <thead>
            <tr>
              <th>Nome completo</th>
              <th>E-mail</th>
              <th>Quarto</th>
              <th>Check-in</th>
              <th>Check-out</th>
              <th>Estadia</th>
              <th>Preço total da reserva</th>
            </tr>
          </thead>
          <tbody>
            { doneReservation.map((e, i) => (
              <tr key={ i }>
                <td>{ e.client.fullName }</td>
                <td>{ e.client.email }</td>
                <td>{ e.rooms[0].type }</td>
                <td>{ e.checkIn }</td>
                <td>{ e.checkOut }</td>
                <td>{ `${e.quantityDays} dias` }</td>
                <td>{ `R$ ${e.totalPrice},00` }</td>
              </tr>
            )) }
          </tbody>
        </Table>
  )
}

export default TableReservation;
