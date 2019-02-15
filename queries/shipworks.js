const sql = require('mssql')
const config = {
  user: process.env.SW_USER,
  password: process.env.SW_PW,
  server: 'RMS-PC\\SHIPWORKS',
  database: process.env.SW_DB,
}

async function  getOrder() {
    try {
        await sql.connect(config);
        const result = await sql.query`select [OrderDate], [RollupItemSKU], [RollupItemQuantity] from [dbo].[Order] where [OnlineStatus] = 'Unshipped' order by [RollUpItemSku]`
        return result.recordset
    } catch (err) {
        console.log(err);
    }
}
module.exports = {
  getOrder,
};
