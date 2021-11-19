import { User } from '../models/User'

export type UserParams = Omit<User, "id">;

export interface ICreateUserService{
  create(data: UserParams): void;
}