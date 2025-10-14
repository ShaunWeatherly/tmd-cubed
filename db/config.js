// Azure SQL Database configuration template
// Update these values as needed for your environment
module.exports = {
  user: process.env.DB_USER || 'your_username',
  password: process.env.DB_PASSWORD || 'your_password',
  server: process.env.DB_SERVER || 'your_server.database.windows.net',
  database: process.env.DB_NAME || 'your_database',
  options: {
    encrypt: true, // for Azure
    trustServerCertificate: false,
  },
};