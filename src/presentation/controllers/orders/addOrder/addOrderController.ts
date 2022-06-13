import { AddOrder } from "../../../../domain/useCases/order/addOrder";
import { ServerError } from "../../../errors";
import { badRequest, noContent, serverError } from "../../../helpers/http/httpHelper";
import { 
  Controller, 
  HttpRequest,
  HttpResponse, 
  Validation
} from "../../../protocols";

export class AddOrderController implements Controller {
  private readonly validation: Validation 
  private readonly addOrder: AddOrder 

  constructor(addOrder: AddOrder, validation: Validation) {
    this.validation = validation
    this.addOrder = addOrder
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest)
      if(error){
        return badRequest(error)
      }

      const { user, product, address, status } = httpRequest.body
      await this.addOrder.add({user, product, address, status})

      return noContent()
    } catch (err) {
      return serverError(new ServerError())
    }
  }
}