const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const { errors } = require("celebrate");
const PORT = 3000;
const app = express();

// config server
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = async function () {
  app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
};
