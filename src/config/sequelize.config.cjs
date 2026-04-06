require('dotenv').config();

// import your actual DB config
const config = require('./db.config.cjs');

// export it directly
module.exports = config;