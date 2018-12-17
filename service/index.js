const http = require('http'),
  mysql = require('mysql'),
  config = require('./config/config.sql'),
  connect = mysql.createConnection(config),
  getParams = require('./utils/getParams')

http
  .createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')

    if (req.method === 'POST') {
      if (req.url === '/user/login') {
        getParams(req, params => {
          const sql = `select pwd from user_table where user="${
            params.userName
          }"`
          connect.query(sql, (err, rows) => {
            if (err) res.end('{ code: 0, data: null }')
            if (!rows.length) {
              res.end('{ code: 0, data: null }')
              return
            }
            if ((params.passWord = new String(rows[0].pwd))) {
              res.end(JSON.stringify({ code: 1, data: rows[0] }))
            }
          })
        })
      }
    } else {
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.end()
    }
  })
  .listen(8888, () => {
    console.log('server is start with port of 8888')
  })
