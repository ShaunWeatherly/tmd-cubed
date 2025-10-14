# Database Module

This folder contains configuration and utility files for connecting to an Azure SQL Database.

## Files

- `config.js`: Database connection settings. Update with your Azure SQL credentials or use environment variables.
- `schema.sql`: General, extensible schema for organizing computational screening data. Modify as your metadata needs evolve.
- `sql.js`: Basic SQL utility module for connecting and querying the database. Uses the `mssql` npm package.

## Usage

1. Install the required package:
   ```bash
   npm install mssql
   ```
2. Update `config.js` with your database credentials.
3. Use the exported `query` function from `sql.js` to run SQL queries in your app:
   ```js
   const db = require('./db/sql');
   // Example: get all host crystals
   db.query('SELECT * FROM HostCrystal').then(result => {
     console.log(result.recordset);
   });
   ```

## Modifying the Schema
- Edit `schema.sql` to add or change tables/fields as your data model evolves.
- Run the SQL statements in your Azure SQL Database to apply changes.
