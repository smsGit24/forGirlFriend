const mysql = require('mysql'),
  config = require('../config/config.sql'),
  con = mysql.createConnection(config),
  getParams = require('../utils/getParams')

function login(params) {
  console.log(params)
  // connect.query(
  //   'select pwd from user_table where user="sms_24"',
  //   (err, rows) => {
  //     // if (err) res.end({ code: 0, data: null })
  //     if (err) res.end('{ code: 0, data: null }')
  //     else {
  //       const val = new String(rows[0].pwd)
  //       // res.end({ code: 1, data: val })
  //       res.end(JSON.stringify({ code: 1, data: val }))
  //       // res.json(`{ code: 1, data: ${val} }`)
  //     }
  //   }
  // )
}

module.exports = {
  login
}
