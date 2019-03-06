require('dotenv').config();
const shipWorks = require('./queries/shipworks.js');
const legend = require('./workers/legend.js');
const locate = require('./workers/locations.js');
const ObjectsToCsv = require('objects-to-csv');

async function getPickList() {
  try {
    const items = await shipWorks.getOrder();
    const mappedItems = await legend.map(items);
    const locations = await locate.find(mappedItems);
    new ObjectsToCsv(locations).toDisk('./test.csv');
    console.log(locations);
  } catch (err) {console.log(err)}
}
getPickList();
