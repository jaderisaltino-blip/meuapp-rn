import axios from "axios";

const api = axios.create({
  baseURL: "https://scaling-palm-tree-6975jj7vrjrpcrwxv-3000.app.github.dev/",      
  //Código da porta do seu "Servidor"

  headers: { "Content-Type": "application/json" },
});

export default api;

