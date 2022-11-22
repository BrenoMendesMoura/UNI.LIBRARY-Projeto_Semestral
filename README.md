# Criação de Site em Nuvem

<HR>

# Dados da Turma <br>
Dia da semana: Terça Feira <br>
Período: Noturno <br>

### Integrantes

|RA| NOME COMPLETO| CURSO | TURMA |
| ------------ | ------------ | ------------ | ------------ |
|3021103570|Breno Mendes Moura|TADS|04A|
|3021103830|Victor França de Souza|TADS|04A|
|3021100282|Victor de souza bernardo|TADS|04A|
|3021104031|Cesar Augusto Martins Vallim|TADS|04A|
|3021103269|Elias Yuri Yoshy Miyashiro|TADS|04A|


<hr>

## Descrição do Projeto
Tendo como objetivo principal, visamos uma criação de site com base em html. Temos como foco a criação de uma página de feedback de animes online, no qual, espectadores ao redor do mundo dariam a avaliação pessoal deles como base para futuros visualizadores interessados em tal Anime ou mangá

<hr>
  
## Utilização da API
  API: https://docs.api.jikan.moe/#tag/top/operation/getTopAnime
  <br>
  A api é gratuita, mas existe uma limitação na quantidade de requests por minuto.
  A requisição é padronizada e geralmente retorna os mesmos campos e varíaveis dentro do arquivo json,
  Caso você faça uma requisição nesse estilo
  ```javascript
var request = new XMLHttpRequest();

request.open('GET', 'https://api.jikan.moe/v4/anime/{id}/{request}/{parameter}');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();
```
  
  Receberá uma resposta como essa:
```javascript
`{
"data": [
{}
],
"pagination": {
"last_visible_page": 0,
"has_next_page": true,
"items": {}
}
}`
```
<br>
 Consequentemente deverá manipular essa informação e navegar utilizando .map para definir as variáveis que deverá aparecer no site.
 <br>
 Essa é uma das ideias iniciais ao desenvolver, uma maneira simples de explicar a requisição por trás,
 <br>
 Mas o script utilizado dentro do projeto vai um pouco além disso.
  
  

### Endereço da aplicação : https://brenomendesmoura.github.io/UNI.LIBRARY-Projeto_Semestral/
