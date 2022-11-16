import path from "node:path";
import express from "express";
import mongoose from "mongoose";

import { router } from "./router";
import { password, cluster } from "../keys"; // Criei um arquivo oculto para armazenar senhas, chaves de api e outras informações



mongoose.connect(`mongodb+srv://Vitor-Tx:${password}@${cluster}.mongodb.net/?retryWrites=true&w=majority`)
  .then(() => {
    console.log("conectado ao mongo!");
    const app = express();
    const port = 3001;

    app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));
    app.use(express.json());
    app.use(router);

    app.listen(port, () => {
      console.log(`🚀 The server is running on http://localhost:${port}}`);
    });

  })
  .catch((error) => {
    console.log(error);
    console.log("erro ao conectar com o mongodb!");
  });

