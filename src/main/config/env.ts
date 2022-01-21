import dotenv from 'dotenv'
dotenv.config()

export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://mongo:27017/usefashionstorelook',
  port: process.env.PORT || 8081,
  jwtSecret: process.env.JWT_SECRET || 'gunfh4430feoj23ddr2rwgwwt2'
}
console.log(process.env.MONGO_URL)
