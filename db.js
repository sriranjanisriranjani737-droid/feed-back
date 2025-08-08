const { Pool } = require('pg');

require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // for local or self-signed certs; remove for production with valid certs
  },
});

module.exports = pool;
