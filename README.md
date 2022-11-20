# OPJS-API

API feita durante o minicurso "O poder do JavaScript", do /maateusilva.

Feita com node.js e express, ela servirá como o back-end de uma aplicação de gerenciamento para pizzarias, a qual será desenvolvida para web e mobile, utilizando React e React Native.

Os repositórios para as aplicações web e mobile podem ser acessados por esses links:
- [OPJS-APP](https://github.com/Vitor-Tx/opjs-app)
- [OPJS-FRONT](https://github.com/Vitor-Tx/opjs-front-end)

Se desejar executar o projeto localmente, você possui várias opções:
- utilizando docker para rodar o mongodb localmente;
- utilizando uma instância de um projeto no atlas do mongodb;
- entre outros.

O projeto atualmente está configurado para rodar utilizando docker. Se quiser usar o atlas, você precisa descomentar essas seções do código da index.ts, na pasta /src(e comentar as equivalentes):

```typescript

//...

//mongoose.connect(`mongodb+srv://<seu-usuario>:<sua-senha>@$<seu-cluster>.mongodb.net/?retryWrites=true&w=majority`) //caso for usar atlas
mongoose
  .connect("mongodb://localhost:27017") //usando docker
//...
```

Para instalar e rodar o projeto, basta rodar os comandos:

```
  npm i
  npm run build
  npm run start
```

## Tecnologias utilizadas

- TypeScript
- Node.js
- Express
- Docker
- Mongodb
- socket.io
- ESLint
- etc
