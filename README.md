# OPJS-API

API feita durante o minicurso "O poder do JavaScript", do /maateusilva.

Feita com node.js e express, ela servirá como o back-end de uma aplicação de gerenciamento para pizzarias, a qual será desenvolvida para web e mobile, utilizando React e React Native.

Se desejar executar o projeto localmente, você possui várias opções:
- utilizando docker para rodar o mongodb localmente;
- utilizando uma instância de um projeto no atlas do mongodb;
- etc;

O projeto atualmente está configurado para rodar utilizando docker. Se quiser usar o atlas, você precisa descomentar essas seções do código da index.ts, na pasta /src(e comentar as equivalentes):

```typescript

//...

//mongoose.connect(`mongodb+srv://<seu-usuario>:<sua-senha>@$<seu-cluster>.mongodb.net/?retryWrites=true&w=majority`) //caso for usar atlas
mongoose
  .connect("mongodb://localhost:27017") //usando docker
//...
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
