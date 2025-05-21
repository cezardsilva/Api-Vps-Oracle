import React, { useEffect, useState } from "react";
import { fetchUsers, sendData, updateUser, deleteUser } from "./services/api";

const App = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ nome: "", email: "", senha: "" });
  const [editData, setEditData] = useState(null); // Estado para edição

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

  // Atualiza o estado do formulário de cadastro
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Envia novo usuário (POST)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = await sendData(formData);
      setUsers([...users, newUser]); // Atualiza lista
      setFormData({ nome: "", email: "", senha: "" }); // Limpa form
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
    }
  };

  // 🔹 Abre modal de edição
  const handleEdit = (user) => {
    setEditData(user);
  };

  // 🔹 Atualiza usuário via PUT
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateUser(editData.id, editData);
      setUsers(users.map((u) => (u.id === editData.id ? editData : u)));
      setEditData(null); // Fecha o modal
    } catch (error) {
      console.error("Erro ao atualizar:", error);
    }
  };

  // 🔹 Remove usuário (DELETE)
  const handleDelete = async (id) => {
    if (!window.confirm("Tem certeza que deseja excluir?")) return;
    try {
      await deleteUser(id);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Erro ao excluir:", error);
    }
  };

  return (
    <div>
      <h3>Cadastrar Usuário</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={formData.nome}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="senha"
          placeholder="Senha"
          value={formData.senha}
          onChange={handleChange}
        />
        <button type="submit">Cadastrar</button>
      </form>

      <h3>Lista de Usuários</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            Nome: {user.nome}, Email: {user.email}
            <button onClick={() => handleEdit(user)}>Editar</button>
            <button onClick={() => handleDelete(user.id)}>Excluir</button>
          </li>
        ))}
      </ul>

      {editData && (
        <div className="modal">
          <h3>Editar Usuário</h3>
          <form onSubmit={handleUpdate}>
            <input
              type="text"
              name="nome"
              value={editData.nome}
              onChange={(e) =>
                setEditData({ ...editData, nome: e.target.value })
              }
            />
            <input
              type="email"
              name="email"
              value={editData.email}
              onChange={(e) =>
                setEditData({ ...editData, email: e.target.value })
              }
            />
            <input
              type="password"
              name="senha"
              value={editData.senha}
              onChange={(e) =>
                setEditData({ ...editData, senha: e.target.value })
              }
            />
            <button type="submit">Salvar Alterações</button>
            <button type="button" onClick={() => setEditData(null)}>
              Cancelar
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default App;
