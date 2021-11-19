import { Article } from './Article'

export class ArticleHome extends Article{
  create(): void {
      console.log("Artigo sobre casa criado");
  }
}