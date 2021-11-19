import { User } from '../models/User'
import { ICreateUserService, UserParams } from '../dtos/ICreateUserService'

export class CreateUserService implements ICreateUserService {
  public create(data: UserParams): User {
    return {
      id: 'any_uuid',
      name: data.name,
      email: data.email,
      password: data.password
    }
  }
}