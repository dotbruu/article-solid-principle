## 1 - (SRP) **O princípio da responsabilidade única**

*A class should have one, and only one, reason to change.*

**Uma classe deve ter um, e somente um, motivo para mudar.**

Este princípio diz que uma classe deve conter apenas uma única responsabilidade, sendo assim mudanças em apenas uma parte específica do software, deve afetar apenas aquele ponto, ou seja, a classe irá executar uma única tarefa ou ação.

### Exemplo de Uso

Vamos imaginar que nós temos uma classe **User**, responsável pelo **CRUD** e surgiu a necessidade de existir uma função para notificar os usuários, ao invés de adicionar mais um método que não seja relacionado ao **CRUD**, devemos definir uma nova classe **Notify** para sanar esta nova necessidade.

```jsx
export default class User {

    create(): void {

    }

    read(): void {

    }

    update(): void {

    }

    delete(): void {

    }

}
```
```jsx
import User from "./User";

export default class Notify {

    constructor(private user: User) {
        
    }

    send(): void {
        
    }

}
```
```jsx
import User from "./utils/User";
import Notify from "./utils/Notify";

const user = new User();
const notify = new Notify(user);
```