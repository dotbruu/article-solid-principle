import { IArticlesRepository } from './IArticlesRepository'

export class ArticlesRepository implements IArticlesRepository {
  findById(id: string): void {
    throw new Error('Method not implemented.');
  }
  findAll(): void {
    throw new Error('Method not implemented.');
  }
  create(title: string): void {
    throw new Error('Method not implemented.');
  }
  delete(id: string): void {
    throw new Error('Method not implemented.');
  }
}