import axios from "axios";

// Função para buscar usuários (GET)
export const fetchUsers = async () => {
  try {
    const response = await axios.get("http://150.230.79.214:3000/usuarios");
    console.log("Dados da API:", response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar usuários:", error.message);
    throw error;
  }
};

// Função para enviar dados (POST)
export const sendData = async (userData) => {
  try {
    const response = await axios.post(
      "http://150.230.79.214:3000/usuarios",
      userData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Dados enviados com sucesso:", response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao enviar dados:", error.message);
    throw error;
  }
};

// Função para editar dados (PUT)
export const updateUser = async (userId, userData) => {
  try {
    const response = await axios.put(
      `http://150.230.79.214:3000/usuarios/${userId}`,
      userData
    );
    console.log("Usuário atualizado:", response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar:", error.message);
    throw error;
  }
};

// Função para deletar dados (DELETE)
export const deleteUser = async (userId) => {
  try {
    const response = await axios.delete(
      `http://150.230.79.214:3000/usuarios/${userId}`
    );
    console.log("Usuário deletado:", response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao excluir:", error.message);
    throw error;
  }
};

// Teste imediato (executa no Node.js)
if (typeof window === "undefined") {
  fetchUsers();
  sendData({
    nome: "Novo Usuário",
    email: "novo@example.com",
    senha: "123456",
  });
}
