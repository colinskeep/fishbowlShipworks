const legend = require('../queries/legend.js');

async function map(items) {
  let arr = [];
  try {
    for (let i = 0; i < items.length; i++) {
      const result = await legend.getSku(items[i].RollUpItemSKU);
      console.log(result[0]);
      arr.push({
        sW: items[i].RollUpItemSKU,
        fB: result[0],
        qty: items[i].RollupItemQuantity,
       });
       if (i === items.length - 1){
         return arr;
       }
    }
  } catch (err) {
    console.log(err);
  }
}
module.exports = {
  map,
}
