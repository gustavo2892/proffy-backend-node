import express from 'express';

const app = express();

app.use(express.json());

app.get('/users', () => {
  console.log('Acessou a rota');
});

app.listen(3333);
