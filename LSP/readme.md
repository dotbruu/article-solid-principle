## 3 - (LSP) **O princípio da substituição de Liskov**

*Derived classes must be substitutable for their base classes.*
**As classes base devem ser substituíveis por suas classes derivadas.**

O princípio da substituição de Liskov foi introduzido por [**Barbara Liskov**](https://en.wikipedia.org/wiki/Barbara_Liskov) em sua conferência “Data abstraction” em 1987.

Este princípio afirma que, em um software, se S é um subtipo de T, então os objetos do tipo T podem ser substituídos por objetos do tipo S (ou seja, um objeto do tipo T pode ser substituído por qualquer objeto de um subtipo S) sem alterar nenhuma das propriedades desejáveis do programa (correção, tarefa realizada, etc.).

### Exemplo de Uso

Considerando que temos uma classe de **artigo** e criamos uma outra classe para **artigo de casa** esta estende de **artigo** de tal forma que **artigo** pode ser substítuido por **artigo de casa**.

```jsx
export abstract class Article{
    create():void{
        console.log("Artigo criado");
    }
}
```

```jsx
export class ArticleHome extends Article{
    create(): void {
        console.log("Artigo sobre casa criado");
    }
}
```