const locations = require('../queries/locations.js');

async function find(mappedItems) {
  let arr = [];
  try {
    for (let i = 0; i < mappedItems.length; i++) {
      const result = await locations.getLoc(mappedItems[i].fB);
      arr.push({
        sW: mappedItems[i].sW,
        fB: mappedItems[i].fB,
        qty: mappedItems[i].qty,
        location: result.name,
      });
     if (i === mappedItems.length - 1){
       return arr;
     }
    }
  } catch (err) {
    console.log(err);
  }
}
module.exports = {
  find,
}
