import path from "node:path";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import { router } from "./router";
//import { password, cluster } from "../keys"; // Criei um arquivo oculto para armazenar senhas, chaves de api e outras informações

//mongoose.connect(`mongodb+srv://Vitor-Tx:${password}@${cluster}.mongodb.net/?retryWrites=true&w=majority`) //caso for usar atlas
mongoose
  .connect("mongodb://localhost:27017") //usando docker
  .then(() => {
    console.log("conectado ao mongo!");
    const app = express();
    const port = 3001;
    app.use((req, res, next) => {
      //console.log("Acessou o Middleware!");
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
      app.use(cors());
      next();
    });

    app.use(
      "/uploads",
      express.static(path.resolve(__dirname, "..", "uploads"))
    );
    app.use(express.json());
    app.use(router);

    app.listen(port, () => {
      console.log(`🚀 The server is running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
    console.log("erro ao conectar com o mongodb!");
  });
