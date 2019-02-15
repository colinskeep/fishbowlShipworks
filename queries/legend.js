const db = require('./db.js');

async function getSku(swSku){
  try {
    const [rows, fields] = await db.execute(
      `SELECT fbSku FROM legend WHERE swSku = '${swSku}' `);
    return rows[0];
  }
}
module.exports = {
  getSku,
}
