import { GoogleUser } from '../models/GoogleUser'
import { ICreateGoogleUserService, GoogleUserParams } from '../dtos/ICreateGoogleUserService'

export class CreateGoogleUserService implements ICreateGoogleUserService {
  public create(data: GoogleUserParams): GoogleUser {
    return {
      id: 'any_uuid',
      name: data.name,
      email: data.email,
      google_id: data.google_id,
    }
  }
}