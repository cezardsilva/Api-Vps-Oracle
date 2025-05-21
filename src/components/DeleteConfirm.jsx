import React from "react";

const DeleteConfirm = ({ user, onConfirm, onCancel }) => {
  return (
    <div className="modal">
      <h3>Excluir Usuário</h3>
      <p>Tem certeza que deseja excluir {user.nome}?</p>
      <button onClick={() => onConfirm(user.id)}>Sim, excluir</button>
      <button onClick={onCancel}>Cancelar</button>
    </div>
  );
};

export default DeleteConfirm;
