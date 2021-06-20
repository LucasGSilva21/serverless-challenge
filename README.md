## 💻 Descrição

O objetivo desse projeto é provisionar uma infraestrutura na AWS, em que se tenha uma lambda que seja capaz de registrar em um banco de dados relacional, dados sobre funcionários de uma empresa.

---

## 🚀 Executando o Backend

É possível executar o backend de duas maneiras:

1. Via link hospedado [ **[API](https://uv90jfs8o2.execute-api.us-east-1.amazonaws.com/dev/api/v1/employees)** ]

2. Executando localmente

OBS.: As instruções a seguir são para executar o backend localmente.

### Pré-requisitos

Para executar localmente, é necessário ter as seguintes ferramentas instaladas no seu computador:

- **[Git](https://git-scm.com)**

- **[Node.js](https://nodejs.org/en/)**

- **[NPM](https://www.npmjs.com/)**

#### Instalação

```bash

# clone o repositório

$ git clone <https://github.com/LucasGSilva21/serverless-challenge.git>

# abra um terminal nesse repositório

$ cd serverless-challenge

```

#### 🎲 Executando o backend

```bash

# entre na pasta backend

$ cd backend

# instale as dependências

$ npm install

# Configure o arquivo .env
# Para isso, crie um arquivo como o nome .env na pasta backend
# Copie o conteúdo do arquivo .env.example 
# Cole no .env e preencha as variáveis com as credenciais de acesso ao DB

# execute os testes

$ npm run test

# execute em modo de desenvolvimento

$ npm run start:dev

# a aplicação irá executar na porta:3333

```

---
## 💡 Endpoints

A api possui os seguintes endpoints para o CRUD de funcionários:

- **Listar todos**: GET - BASE_URL/employees
- **Listar um**: GET - BASE_URL/employees/:id
- **Criar**: POST - BASE_URL/employees
- **Atualizar**: PUT - BASE_URL/employees/:id
- **Deletar**: DELETE - BASE_URL/employees/:id

OBS.: Substitua BASE_URL conforme o ambiente de execução

- **Local**: http://localhost:3333/api/v1/
- **Hospedagem AWS**:   https://uv90jfs8o2.execute-api.us-east-1.amazonaws.com/dev/api/v1/

É possível consultar os endpoints localmente via Swagger acessando  http://localhost:3333/api/v1/api-docs. Eu não consegui configurar o swagger para executar no lambda.

## 🛠 Ferramentas

As seguintes ferramentas foram usadas na construção do projeto:

  

#### **Backend** ([NodeJS](https://nodejs.org/en/))

- **[Typescript](https://www.typescriptlang.org/)**

- **[NestJs](https://nestjs.com/)**

- **[PostgreSQL](https://www.postgresql.org/)**

- **[SQLite](https://www.sqlite.org/index.html)**

- **[TypeORM](https://typeorm.io/#/)**

- **[Serverless](https://www.serverless.com/)**

- **[Jest](https://jestjs.io/)**

- **[Swagger](https://swagger.io/)**

> Verifique o arquivo [package.json](https://github.com/LucasGSilva21/serverless-challenge/blob/main/backend/package.json)

#### **Programas auxiliares**

- Editor: **[Visual Studio Code](https://code.visualstudio.com/)**

- API test: **[Insomnia](https://insomnia.rest/)**

---

## 👤 Autor

Feito por Lucas Gabriel 👋

[![Linkedin Badge](https://img.shields.io/badge/-Lucas-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/lucas-gabriel-30aab4183/)](https://www.linkedin.com/in/lucas-gabriel-30aab4183/)

  

[![Gmail Badge](https://img.shields.io/badge/-lucasgsilva2102@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:lucasgsilva2102@gmail.com)](mailto:lucasgsilva2102@gmail.com)

---

## 📝 Licença

Licence [MIT](./LICENSE.md).
