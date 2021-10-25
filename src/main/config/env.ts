export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/usefashionstorelook',
  port: process.env.PORT || 8080,
  jwtSecret: process.env.JWT_SECRET || 'gunfh4430feoj23ddr2rwgwwt2'
}
