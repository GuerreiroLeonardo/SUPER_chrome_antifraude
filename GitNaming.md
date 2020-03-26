# Super Developers Documentation and Workflows

## Fluxo de trabalho

O desenvolvimento é feito seguindo os seguintes passos:

  1. Fazer clone do repositório
  2. Criar uma branch
  3. Padrões de trabalho
  3.1 Estrutura dos Commits
  4. Criar PR
  5. Code Review
  6. Fazer merge para branch `development`
  7. Testes/Aprovação
  8. Fazer merge para `master``

### 1. Fazer clone do repositório

```bash
git@github.com:appsuper/docs.git
```

### 2. Criar uma branch

Para criar uma nova branch, deveremos usar o seguinte padrão de nomeclatura:

`<tipo-da-branch>/issue-<numero-da-issue>`

Onde:

**tipo-da-branch** são tipos definidos pelo time, que segue:

| Tipo da Branch | Descrição                                                      |
|----------------|----------------------------------------------------------------|
|feature         |quando a branch implementa um novo recurso.                     |
|changes         |quando a branch muda a funcionalidade de um determinado recurso |
|bugfix          |quando a branch corrige bugs.                                   |
|improvement     |quando a branch melhora um recurso existente.                   |

**numero-da-issue**: Todas as branchs criadas estão relacionadas a uma issue aberta, utilizaremos a numeração da issue para ajudar a identificação de qual issue a branch esta relacionada. Exemplo:

**Issue #110 - Criar links para topicos em README.md** 

Nome da branch: `improvement/issue-110`

> Esse tipo de nomeclatura ajuda na hora da identificação e também na funcionalidade de auto-completar do terminal.
> Por exemplo, se desejar buscar todas as branchs que são do tipo bugfix basta digitar: `$ bugfix` + \<TAB\> e o git
> irá sugerir todas as branchs relacionadas a bugfix.

### 3. Padrões de trabalhos
#### 3.1 Estrutura dos Commits

Para manter a consistência e facilitar a colaboração entre os membros do time é importante manter nossas mensagens de commits descritivas e organizadas. Para tal, é interessante que tenhamos alguns cuidados:

- Escreve as mensagens em inglês
- Limite as mensagens a no máximo 50 caracteres
- Mensagem iniciando com letra maiúscula
- Não finalizar a mensagem com um "."
- Use a forma imperativa para descrever suas mensagens

Essas dicas(e outras) podem ser encontradas nesse [nesse ótimo artigo](https://chris.beams.io/posts/git-commit/)

### 4. Criar Pull Request

No nosso fluxo de trabalho, nenhum código é enviado diretamente para a `master`. Isso se dá para que os demais devs do time possam validar a solução e diminuir a quantidade de bugs introduzidas no nosso projeto.

Atualmente temos dois templates para a criação de um pull request, um destino à novas `features` e outro para a correção de `bugs`. Esses pull requests devem ser vinculados([mais detalhes](https://help.github.com/pt/enterprise/2.15/user/articles/closing-issues-using-keywords)) a uma Issue, caso não exista ela deve ser criada.

Para mais detalhes, consulte a [documentação do github](https://help.github.com/pt/enterprise/2.15/user/articles/closing-issues-using-keywords)

### 5. Code Review

Um outro ponto importante para a qualidade é o processo de `code review`, onde os demais membros do time farão uma revisão do seu `pull request` para validar se o código está dentro dos nossos padrões, se há problemas de lógica ou melhorias a serem feitas. Para a aprovação de um `pull request` é necessário que pelo menos um desenvolvedor faça a revisão do seu código e que aprove as mudanças.

Para mais detalhes, consulte [esse artigo](https://blog.guilhermegarnier.com/2018/05/the-anatomy-of-a-code-review/)

### 6. Fazer merge para `master`

Após a aprovação do seu `pull request` via code review e testes, o seu pull request pode ser mergeado na master. Após isso, automaticamente o código será enviado para o ambiente de produção. Seja cuidadoso.
