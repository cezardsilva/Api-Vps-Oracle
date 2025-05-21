# 🚀 API Node.js + React/Vite - Gerenciamento de Usuários

Este projeto implementa um **backend em Node.js** com banco de dados **SQLite** e um **frontend em React/Vite**, permitindo um CRUD completo para usuários! 🎯🔥

---

## ✨ Tecnologias Utilizadas

### **Backend (Node.js + SQLite)**

- **Express.js** → Framework rápido e minimalista
- **SQLite** → Banco de dados leve e eficiente
- **CORS** → Permite requisições entre frontend e backend
- **PM2 / Systemd** → Gerenciamento do servidor VPS
- **API REST** → CRUD completo (GET, POST, PUT, DELETE) **(VPS Oracle)**

### **Frontend (React + Vite + Axios)**

- **React.js** → Biblioteca para interfaces modernas
- **Vite** → Ambiente de desenvolvimento ultra rápido
- **Axios** → Comunicação assíncrona com a API
- **Styled Components / CSS** → Personalização do layout

---

## 🔧 **Como Rodar o Projeto**

### **1️⃣ Configurar o Backend (Node.js)**

> Entre na VPS e clone o repositório:

```sh
git clone https://github.com/cezardsilva/api-vps-oracle.git
cd backend
npm install
```

> Inicialize o banco SQLite:

```sh
sqlite3 dbDev.db "CREATE TABLE usuarios (id INTEGER PRIMARY KEY, nome TEXT, email TEXT, senha TEXT);"
```

> Iniciar o servidor API:

```sh
pm2 start server.js --name meuServidor
```

2️⃣ Configurar o Frontend (React/Vite)

> Clone o repositório e instale as dependências:

```sh
git clone https://github.com/cezardsilva/crud-react-vite-nodejs-vps.git
cd frontend
npm install
```

> Defina a URL da API no arquivo ###services/api.js###:

```sh
const BASE_URL = "http://SEU_IP:3000";
```

> Inicie o ambiente de desenvolvimento:

```sh
npm run dev
```

> Acesse via navegador:

```sh
http://localhost:5173
```

🔄 Fluxo do Sistema

1. O frontend React se conecta à API [Node.js](https://Node.js) via ###Axios###

2. O usuário pode cadastrar, editar e excluir usuários

3. O banco SQLite armazena os dados no servidor VPS

4. A API responde às requisições via JSON, garantindo eficiência

5. O sistema pode ser expandido com JWT, autenticação ou GraphQL

## 🎯 Endpoints da API

### ✔ Listar usuários (GET)

```sql
GET /usuarios
```

### ✔ Criar usuário (POST)

```sql
POST /usuarios
{
  "nome": "Novo Usuário",
  "email": "novo@example.com",
  "senha": "123456"
}
```

### ✔ Atualizar usuário (PUT)

```sql
PUT /usuarios/:id
{
  "nome": "Nome Atualizado",
  "email": "email@example.com",
  "senha": "novaSenha"
}
```

### ✔ Excluir usuário (DELETE)

```sql
DELETE /usuarios/:id
```

## 💡 Melhorias Futuras

    🔒 Autenticação JWT

    🚀 Deploy automático via CI/CD

    🎨 Estilização avançada (Styled Components ou Tailwind CSS)

    📦 Banco de dados MySQL/PostgreSQL

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

---

Desenvolvido por [Cezar D Silva](https://github.com/cezardsilva) | Dev Full Stack 🚀 📬
