import React, { useContext } from 'react';
import Context from '../../context/Context';
import DeleteButton from '../DeleteButton';
import { Table } from './styles';


function TableReservation() {
  const { doneReservation } = useContext(Context);

  return (
    doneReservation.length !== 0 &&
      <Table>
        <thead>
          <tr>
            <th>Quarto</th>
            <th>Check-in</th>
            <th>Check-out</th>
            <th>Preço total da reserva</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          { doneReservation.map((e, i) => (
            <tr key={ i }>
              <td>{ e.rooms[0].type }</td>
              <td>{ (e.checkIn).slice(0, 10) }</td>
              <td>{ (e.checkOut).slice(0, 10) }</td>
              <td>{ `R$ ${e.totalPrice},00` }</td>
              <td><DeleteButton id={e.id} clientId={ e.clientId } /></td>
            </tr>
          )) }
        </tbody>
      </Table>
  )
}

export default TableReservation;
