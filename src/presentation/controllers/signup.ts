import { HttpResponse, HttpRequest } from '../protocols/http'
import { MissingParamError } from '../erros/missing-params-erros'
import { badRequest } from '../helpers/http-helper'

export class SignUpController {
  // @ts-expect-error
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['password', 'name', 'mail']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
  }
}
