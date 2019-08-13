import React from 'react';

const UserList = ({ user }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Email:</th>
          <td>{user.email}</td>
        </tr>
        <tr>
          <th>ID:</th>
          <td>{user._id}</td>
        </tr>
        <tr>
          <th>Admin:</th>
          <td>{user.roles.admin ? 'SÍ' : 'NO'}</td>
        </tr>
      </tbody>
    </table>
  )
};

export default UserList;