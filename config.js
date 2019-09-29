require('dotenv').config()



module.exports = {
    port: process.env.PORT,
    cors: process.env.CORS,
    projectName: process.env.PROJECT_NAME,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME
}