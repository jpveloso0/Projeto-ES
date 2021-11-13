// npm install axios
import axios from "axios";

const api = axios.create({
  baseURL: "http://dados.recife.pe.gov.br/pt_BR/dataset/acidentes-de-transito-com-e-sem-vitimas",
});

export default api;
