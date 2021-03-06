import { LogMongoRepository } from '../../../infra/db/mongoDb/log/logMongoRepository'
import { Controller } from '../../../presentation/protocols'
import { LogControllerDecorator } from '../../../main/decorators/logControllerDecorator'

export const makeLogControllerDecorator = (controller: Controller): Controller => {
  const logMongoRepository = new LogMongoRepository()
  return new LogControllerDecorator(controller, logMongoRepository)
}
