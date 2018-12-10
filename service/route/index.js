const mysql = require('mysql'),
  config = require('../config/config.sql'),
  con = mysql.createConnection(config)

function login(cb, user, pwd) {
  console.log(cb)
  const sql = `SELECT pwd FROM user_table WHERE user="${'sms_24'}"`
  con.query(sql, (err, rows, fields) => {
    if (err) cb(400)
    else {
      if (rows) {
        const res = new String(rows[0].pwd)
        // cb(200, res)
        cb()
        console.log(res)
      }
    }
  })
}

module.exports = {
  login
}
