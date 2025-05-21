import React, { useState } from "react";
import { sendData } from "../services/api";

const UserForm = ({ onUserAdded }) => {
  const [formData, setFormData] = useState({ nome: "", email: "", senha: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = await sendData(formData);
      onUserAdded(newUser); // Atualiza a lista na tela
      setFormData({ nome: "", email: "", senha: "" }); // Limpa formulário
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
    }
  };

  return (
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
  );
};

export default UserForm;
