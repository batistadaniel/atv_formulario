import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.post('/calculo', (req, res) => {

  const { nome, nota1, nota2 } = req.body;
  console.log(`Nome: ${nome}`);
  console.log(`Nota 1: ${nota1}`);
  console.log(`Nota 2: ${nota2}`);
  res.send(`
    Nome: ${nome} <br>
    Nota 1: ${nota1} <br>
    Nota 2: ${nota2}
  `);
});

app.listen(3000, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
