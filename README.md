## 💻 Descrição

O objetivo desse projeto é provisionar uma infraestrutura na AWS, em que se tenha uma lambda que seja capaz de registrar em um banco de dados relacional, dados sobre funcionários de uma empresa.

---

## 🚀 Executando o Backend

É possível executar o backend de duas maneiras:

1. Via link hospedado

2. Executando localmente

💡As instruções a seguir são para executar o backend localmente.

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

## 🛠 Ferramentas

As seguintes ferramentas foram usadas na construção do projeto:

  

#### **Backend** ([NodeJS](https://nodejs.org/en/))

- **[Typescript](https://www.typescriptlang.org/)**

- **[NestJs](https://nestjs.com/)**

- **[PostgreSQL](https://www.postgresql.org/)**

- **[TypeORM](https://typeorm.io/#/)**

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