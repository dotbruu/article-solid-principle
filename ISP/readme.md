## 4 - (ISP) O princípio da Segregação de Interface

*Make fine grained interfaces that are client specific.*

**Crie interfaces refinadas que sejam específicas do cliente.**

Este princípio diz que as classes não devem ser forçadas a depender de métodos que não utilizam, ou seja, crie interfaces específicas ao invés de uma interface genérica.

### Exemplo de Uso

Em uma situação hipotética criamos uma interface com os método **findById, findAll, create e delete**, aplicamos está interface à classe **ArticlesRepository.** Em determinado momento surgiu a necessidade de criar uma classe chamada **CategoriesRepository**, neste caso ao invés de aplicar a mesma interface para ambos os casos, devemos criar uma nova contendo seus próprios métodos, pois assim a classe **CategoriesRepository** não será forçada a utilizar métodos que não seja necessário.

```jsx
export interface IArticlesRepository{
	findById(): void;
	findAll(): void;
	create(): void;
	save(): void;
}
```

```jsx
export class ArticleRepository implements IArticlesRepository{
	findById(): void{}
	findAll(): void;
	create(): void;
	save(): void;
}
```

```jsx
export interface ICategoriesRepository{
	findById(): void;
	create(): void;
	save(): void;
}
```

```jsx
export class CategoriesRepository implements ICategoriesRepository{
	findById(): void{}
	create(): void{};
	save(): void{};
}
```