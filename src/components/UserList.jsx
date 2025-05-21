import React, { useEffect, useState } from "react";
import { fetchUsers, deleteUser } from "../services/api";
import UserEdit from "./UserEdit";
import DeleteConfirm from "./DeleteConfirm";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userToDelete, setUserToDelete] = useState(null); // Estado para confirmação de exclusão

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      }
    };

    getUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter((user) => user.id !== id));
      setUserToDelete(null); // Fecha modal
    } catch (error) {
      console.error("Erro ao excluir:", error);
    }
  };

  return (
    <div>
      <h3>Lista de Usuários</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            Nome: {user.nome}, Email: {user.email}
            <button onClick={() => setSelectedUser(user)}>Editar</button>
            <button onClick={() => setUserToDelete(user)}>Excluir</button>
          </li>
        ))}
      </ul>
      {selectedUser && (
        <UserEdit user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
      {userToDelete && (
        <DeleteConfirm
          user={userToDelete}
          onConfirm={handleDelete}
          onCancel={() => setUserToDelete(null)}
        />
      )}
    </div>
  );
};

export default UserList;
