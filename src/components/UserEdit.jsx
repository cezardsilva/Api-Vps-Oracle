import React, { useState } from "react";
import { updateUser } from "../services/api";

const UserEdit = ({ user, onClose }) => {
  const [editData, setEditData] = useState({ ...user });

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser(editData.id, editData);
      onClose(); // Fecha modal
    } catch (error) {
      console.error("Erro ao atualizar:", error);
    }
  };

  return (
    <div className="modal">
      <h3>Editar Usuário</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          value={editData.nome}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={editData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="senha"
          value={editData.senha}
          onChange={handleChange}
        />
        <button type="submit">Salvar</button>
        <button type="button" onClick={onClose}>
          Cancelar
        </button>
      </form>
    </div>
  );
};

export default UserEdit;
