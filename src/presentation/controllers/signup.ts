import { InvalidParamError } from './../erros/invalid-params-erros'
import { EmailValidator } from './../protocols/email-validator'
import { Controller } from './../protocols/controller'
import { HttpResponse, HttpRequest } from '../protocols/http'
import { MissingParamError } from '../erros/missing-params-erros'
import { badRequest } from '../helpers/http-helper'

export class SignUpController implements Controller {
  private readonly emailValidator: EmailValidator

  constructor (emailValidator: EmailValidator) {
    this.emailValidator = emailValidator
  }

  // @ts-expect-error
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['password', 'email', 'name', 'passwordConfirmation']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }

    const isValid = this.emailValidator.isValid(httpRequest.body.email)
    if (!isValid) {
      return badRequest(new InvalidParamError('email'))
    }
  }
}
