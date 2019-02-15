const db = require('./db.js');

async function getLoc(swSku){
  try {
    const [rows, fields] = await db.execute(
      `SELECT fbSku FROM legend WHERE sellersku = '${swSku}' `);
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
  getLoc,
}
