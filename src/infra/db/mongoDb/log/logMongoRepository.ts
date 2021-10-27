import { LogErrorRepository } from '../../../../data/protocols/db/log/logErrorRepository'
import { mongoHelper } from '../helper/mongoHelper'

export class LogMongoRepository implements LogErrorRepository {
  async logError (stack: string): Promise<void> {
    const errorCollection = await mongoHelper.getCollection('errors')
    await errorCollection.insertOne({
      stack,
      date: Date.now()
    })
  }
}
