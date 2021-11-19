export interface IArticlesRepository {
  findById(id: string): void;
  findAll(): void;
  create(title: string): void;
  delete(id: string): void;
}