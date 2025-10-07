const express = require("express");
const cors = require("cors");
const fs = require("fs");
const csv = require("csv-parser");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

function getGastos(cidade, ano) {
  return new Promise((resolve, reject) => {
    const results = [];
    fs.createReadStream("./data/gastos.csv")
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", () => {
        const gasto = results.find(
          (row) => row.cidade === cidade && row.ano === ano
        );
        if (gasto) {
          resolve({
            Saúde: Number(gasto.Saúde),
            Educação: Number(gasto.Educação),
            Transporte: Number(gasto.Transporte),
          });
        } else {
          resolve(null);
        }
      })
      .on("error", (err) => reject(err));
  });
}

app.get("/gastos", async (req, res) => {
  const { cidade, ano } = req.query;
  if (!cidade || !ano) {
    return res.status(400).json({ error: "cidade e ano são obrigatórios" });
  }
  const data = await getGastos(cidade, ano);
  if (!data) return res.status(404).json({ error: "Dados não encontrados" });
  res.json(data);
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));