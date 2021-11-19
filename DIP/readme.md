## 5 - (ISP) **O princípio da inversão da dependência**

*Depend on abstractions, not on concretions.*
**Deve-se depender de abstrações, não de objetos concretos.**

Este princípio estabelece que:

*1 - Módulos de alto nível não devem incorporar (ou incluir) nada dos módulos de baixo nível. Ambos devem trabalhar apenas com abstrações, ou seja, interfaces.* 

*2 - Abstrações não devem depender de detalhes de implementação, mas os detalhes é que devem depender de abstrações.*

Sendo assim não podemos depender de uma implementação, mas de uma abstração.

### Exemplo de Uso

Não é difícil encontrar casos onde aplicações utilizam um banco de dados (exemplo: postgres) e para salvar, buscar ou alterar dados depende/consome diretamente a implementação, sendo assim caso a aplicação passe a utilizar outro tipo de banco de dados, todos os pontos da aplicação que dependem desta implementação terão que ser alterados. Porém caso tivesse sido criado uma abstração que realizar a implementação deste banco de dados e a aplicação utilizasse está abstração, caso o banco de dados fosse alterado, apenas a abstração seria alterada.

```jsx
export class FilesRepository implements IFilesRepository {
  private ormRepository: MongoRepository<File>;

  constructor() {
    this.ormRepository = getMongoRepository(File, "mongo");
  }

  public async findById(id: string): Promise<File | undefined> {
    const file = await this.ormRepository.findOne({
      where: { _id: ObjectID(id) },
    });

    return file;
  }
}
```