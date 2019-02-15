require('dotenv').config();
const shipWorks = require('./queries/shipworks.js');
const legend = require('./workers/legend.js');

async function getPickList() {
  try {
    const items = await shipWorks.getOrder();
    const mappedItems = await legendDb.map(items);
    console.log(mappedItems);
  } catch (err) {console.log(err)}
}
getPickList();
