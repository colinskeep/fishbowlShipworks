const db = require('./db2.js');

async function getLoc(fB){
  try {
    const [rows, fields] = await db.execute(
      `SELECT LOCATION.name FROM part RIGHT JOIN DEFAULTLOCATION on part.id = partId RIGHT JOIN LOCATION on location.id = locationId WHERE part.num = '${fB}' `);
    if (rows.length === 0){
      return {name: 'Not Mapped'};
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
