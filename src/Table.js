import React from 'react';
import './Table.css';
import Task from './Task';

function Table({ data }) {
  return (
    <table className="table-main">
      <tbody>
        <tr>
          <th>Work order</th>
          <th>Description</th>
          <th>Date</th>
          <th>Assigned to</th>
          <th>Task status</th>
          <th>Priority</th>
        </tr>
        {data.map((task, index) => {
          return <Task key={index} task={task} />;
        })}
      </tbody>
    </table>
  );
}

export default Table;
