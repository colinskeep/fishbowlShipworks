require('dotenv').config();
const shipWorks = require('./queries/shipworks.js');
const legend = require('./workers/legend.js');
const locate = require('./workers/locations.js');

async function getPickList() {
  try {
    const items = await shipWorks.getOrder();
    const mappedItems = await legend.map(items);
    const locations = await locate.find(mappedItems);
  } catch (err) {console.log(err)}
}
getPickList();
