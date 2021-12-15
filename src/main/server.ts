import { mongoHelper } from '../infra/db/mongoDb/helper/mongoHelper'
import env from './config/env'

mongoHelper.connect(env.mongoUrl)
  .then(async () => {
    const app = (await import('./config/app')).default
    app.listen(env.port, () => {
      console.log(`Server Running at port ${env.port}!`)
    })
  }).catch(err => {
    console.log(err)
  })
