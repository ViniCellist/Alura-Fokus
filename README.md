# ALura - Projeto Fokus

Esta é a solução final para o projeto.

## Tabela de Conteúdo

- [Revisão](#revisão)
  - [O Desafio](#o-desafio)
- [Meu processo](#meu-processo)
  - [Estrutura](#estrutura)
  - [O que Aprendi](#o-que-aprendi)
- [Autor](#autor)

## Revisão

Foi uma experiência única trabalhar neste projeto, pois foi tanto quanto um desafio próprio, quanto ao desafio proposto pela Alura...onde por diversas vezes revisei, alterei e melhorei todo o conteúdo que foi sendo construido ao decorrer do curso!

### O Desafio

O projeto foi divido em duas etapas:
- Primeiro a alteração dinâmica da página a escolha do usuário quanto aos botôes descanso curto, descanso longo e foco;
- Segundamente a implementação e manipulação do formulário para a imersão do usuário

## Meu processo

- script.js
  - Foi definido `const` recebendo os seletores diretamente do HTML.
  - Por estes seletores foram feitas alterações, remoções e adições sobre as classes compostas do HTML, a qual trabalhava dinâmicamente com o CSS;.
  - Ou seja, cada vez que uma `const` tinha seu estado alterado pela interação do usuário sobre a página, sua característica mudava.
  - Também foi posta a interação dos sons sobre as ações do usuário.
  - Juntando tudo isso a atualização dinâmica do contador sobre a opção desejada do usuário.
- script-crud.js
  - Implantação do formulário
  - Utilizando as manipulações do DOM sobre os elementos HTML, foi possivel: adicionar, excluir e editar.
  - As informações impostas pelo usuário são salvas diretamente no LocalStorage.

### Estrutura

- Marcação Semântica no [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- Propriedade Customizadas do [CSS3](https://www.w3schools.com/css/)
- Manipulação do DOM e LocalStorage através do [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- api [JSON](https://jsonapi.org/)
- integração Mobile e Tablet

### O que Aprendi

A manipulação de eventos pelo DOM foi uma experiência única, mas a utilização da api JSON foi de longe oque mais gostei de codar.

o maior obstáculo que enfrentei foi o bug que essa linha me devolvia sem o `stringify`, pois ao final da do debbug, o valor retornado do tipo object

```js
function updateTask() {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}
```

## Autor

- Perfil LinkedIn - [Vinicius Duarte](https://www.linkedin.com/in/vinicius-de-souza-duarte-57937b192/)
- Instagram - [@vinicius_duartesd](https://www.instagram.com/vinicius_duartesd/)