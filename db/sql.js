// db/sql.js
// Basic SQL utility module for Azure SQL Database
// Uses 'mssql' package. Install with: npm install mssql

const sql = require('mssql');
const config = require('./config');

let pool;

async function getPool() {
  if (!pool) {
    pool = await sql.connect(config);
  }
  return pool;
}

async function query(queryString, params = {}) {
  const pool = await getPool();
  const request = pool.request();
  for (const key in params) {
    request.input(key, params[key]);
  }
  return request.query(queryString);
}

module.exports = {
  sql,
  getPool,
  query,
};
