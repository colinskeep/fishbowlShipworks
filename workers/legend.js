const legend = require('../queries/legend.js');

async function map(items) {
  let arr = [];
  try {
    for (let i = 0; i < items.length; i++) {
      const result = await legend.getSku(items[i].RollupItemSKU);
      arr.push({
        sW: items[i].RollupItemSKU,
        fB: result.fbsku,
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
