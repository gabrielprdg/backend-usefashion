export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/clean-node-api',
  port: process.env.PORT || 8080,
  jwtSecret: process.env.JWT_SECRET || 'gunfh4430feoj23ddr2rwgwwt2'
}
