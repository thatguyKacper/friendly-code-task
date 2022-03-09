import React from 'react';
import './Task.css';

function Task({ task }) {
  return (
    <tr key={task.work_order_id}>
      <td>{task.work_order_id}</td>
      <td>{task.description}</td>
      <td>{task.received_date}</td>
      <td>
        <table>
          <tbody>
            <tr>
              {task.assigned_to.map((person, index) => (
                <td key={index}>{person.person_name}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </td>
      <td>{task.status}</td>
      <td>{task.priority}</td>
    </tr>
  );
}

export default Task;
