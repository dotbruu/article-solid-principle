## 2 - (OCP) **O princípio Aberto-Fechado**

*You should be able to extend a classes behavior, without modifying it.*
**Você deve ser capaz de estender um comportamento de uma classe, sem modificá-lo.**

Este princípio fala que uma classe deve estar aberta para extensão e fechada para modificação, sendo assim, novas funcionalidades e recursos não devem alterar o código original, apenas entendê-lo.

### Exemplo de Uso

Supondo que estamos construindo o cadastro de usuários em nossa aplicação, sendo assim o usuário vai inserir nome, email e senha para realizar seu cadastro. 

Porém após algum tempo foi solicitado a inclusão do login social do google, e o mesmo irá retornar id do google, email e nome, ou seja, faltará a senha, neste caso não devemos alterar a classe já existem cujo a senha era um requisito e torná-la nula, podemos criar uma nova classe e com isso atender este princípio.

```jsx
export interface IUser{
	id: string;
    name: string;
    email: string;
    password: string;
}
```

```jsx
export interface IGoogleUser{
    id: string;
    name: string;
    email: string;
    google_id: string;
}
```