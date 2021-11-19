import { CreateUserService } from './services/CreateUserService'
import { CreateGoogleUserService } from './services/CreateGoogleUserService'

const createUserService = new CreateUserService()
const createGoogleUserService = new CreateGoogleUserService()

const user = createUserService.create({
  name: 'João',
  email: 'joao@mail.com',
  password: '123456',
})
const googleUser = createGoogleUserService.create({ 
  name: 'lucas',
  email: 'lucas@mail.com',
  google_id: 'google_id'
})

console.log(user, googleUser)