const db = require('./db.js');

async function getSku(swSku){
  try {
    const [rows, fields] = await db.execute(
      `SELECT fbsku FROM legend WHERE sbsku = '${swSku}' `);
    if (rows.length === 0){
      return {fbSku: 'Not Mapped'};
    } else {
      return rows[0];
    }
  } catch (err) {
    console.log(err);
  }
}
module.exports = {
  getSku,
}
