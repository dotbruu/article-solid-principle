import { GoogleUser } from '../models/GoogleUser'

export type GoogleUserParams = Omit<GoogleUser, "id">;

export interface ICreateGoogleUserService{
  create(data: GoogleUserParams): void;
}