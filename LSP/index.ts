import { Article } from './utils/Article'
import { ArticleHome } from './utils/ArticleHome'

const article = new Article()
const articleHome = new ArticleHome()

console.log(article.create(), articleHome.create())