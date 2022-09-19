# Back-end

## Entidades

### Game

- Um para muitos, um game pode ter muitos anúncios.

> id
> title
> bannerUrl

_Caso seja por upload, utilizar CDN (Content Delivery Network) ex: Amazon S3, etc => Url_

### Ad

- Conter todas as informações dos jogos, e preferencias.

> id
> gameId
> name
> yearsPlaying
> discord
> weekDays
> hourStart
> hourEnd
> useVoiceChannel
> createdAt

_Dica: Sempre que for trabalhar com Banco de Dados, com campos que podem ter valores decimais, salvar em minutos, e depois trabalhar isso dentro do back-end/front (ex: 1h30 -> 90minutos), o mesmo tambem para preços (ex: $179,89 -> multiplica por 100 = 17.989), para não ter numeros 'quebrados' salvos no Banco de dados._

## Casos de Uso

> Listagem dos Games com contagem de anúncios
> Publicar novo Anuncio/ Criar novo anuncio
> Listagem de anuncios com base no Game
> Mostrar informação (Discord), a ser selecionado o Anuncio e clicado em 'conectar' / buscar discord por Id do anúncio
