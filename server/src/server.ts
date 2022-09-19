import express, { request, response } from 'express';

const app = express();

// localhost: 3333
//www.minhaapi.com/ads

// HTTP Methods / API RESTful
// GET, POST, PUT, PATCH, DELETE

// POST - Metodo para quando tiver criando algum recurso/entidade no back-end
// PUT - Editando uma entidade por completo (ex: editar perfil)
// PATCH - Editando uma informação especifica dentro de uma entidade (ex: receber notificação (sim ou nao))

// HTTP Codes
// Retorna o codigo da resposta que foi executada, se foi valida, o tipo de resposta
// Sucesso = Status 201 - criado
// Sucesso = Status 200 - ok generico
// Redirecionamento = Status 3...
// Erro da aplicação = Status 4...
// Erro Inesperado = Status 5...


/**
 * Tipos de Parametros
 * - Query: vem atraves do ? - Quando precisa persistir Estado (estado atual da pagina, Ex: aplicado filtros na pagina, ordenação, etc) - e sempre são nomeados: .../ads?page=2&sort=title
 * - Route: Parametro url, mas não são nomeados. ex: .../ads/5 ou ../game/league-of-legends - quando precisa fazer uma identificação de recurso
 * - Body: Quando vai enviar uma informação ou varias (envio de formulario) em uma unica requisição. Body fica escondido na requisiçao e nao na URL, utilizado para informações sensiveis (senhas, etc).
 */
// --------------------

app.get('/games', (request, response)=>{
  return response.json([]);
});

// criar - 
app.post('/ads', (request, response)=>{ 
  return response.json([]);
});

// listar game especifico / concatenação de recursos - relacionamento na rota game/id/ads
// no Express para informar que o id é um paramtro usa os :id
app.get('/games/:id/ads', (request, response) => {
  //const gameId = request.params.id;

  return response.json([
    {
      id: 1,
      name: 'Anuncio 1'
    },
    {
      id: 2,
      name: 'Anuncio 2'
    },
    {
      id: 3,
      name: 'Anuncio 3'
    },
    {
      id: 4,
      name: 'Anuncio 4'
    }
  ]);
});


app.get('/ads/:id/discord', (request, response) => {
  //const adId = request.params.id;

  return response.json([]);
});

app.listen(3333);
