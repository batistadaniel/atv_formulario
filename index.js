// importa express para iniciar servidor
import express from 'express';
// cors para lidar com bloqueios
import cors from 'cors';

// inicia o servidor
const app = express();

// seta as configuracoes
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// defini a porta
const PORT = 3000;

// rota onde sera executado o calculo da media
app.post('/calculo', (req, res) => {
  const { nome, nota1, nota2 } = req.body;
  // lista com as situacoes
  const situacoes = ["Aprovado", "Exame Final", "Reprovado"];

  // calculo da media
  const media = (Number(nota1) + Number(nota2)) / 2;
  // frescuragem para a situacao do aluno. funcionou ta valendo rsrs
  const situacaoAluno = (media >= 6) ? situacoes[0] : (media >= 2) && (media < 6) ? situacoes[1] :  situacoes[2]

  // enviando para usar no front
  res.send(`
    Nome: ${nome} <br>
    Média: ${media} <br>
    Situacao: ${situacaoAluno}
  `);
});

// liga na porta definida
app.listen(3000, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
