// importa express para iniciar servidor
import express from 'express';
// cors para lidar com bloqueios
import cors from 'cors';

// inicia o servidor
const app = express();

// permite que o servidor aceite requisicoes de outras origens
app.use(cors());
// converte o texto json em objetos javascript para facilitar o acesso aos dados
app.use(express.json());
// permite ler dados enviados via formulario padrao do html sem precisar de fetch
app.use(express.urlencoded({ extended: true }));

// defini a porta
const PORT = 3000;

// rota onde sera executado o calculo da media
app.post('/calculo', (req, res) => {
  // extrai as informacoes do corpo da requisicao
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
