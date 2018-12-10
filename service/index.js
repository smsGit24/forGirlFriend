const http = require('http'),
  url = require('url'),
  api = require('./route')

http
  .createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')

    const req_url = url.parse(req.url, true)
    const method = req_url.pathname.slice(1)

    function success(status = 200, response = {}) {
      res.writeHead(status, { 'Content-Type': 'text/plain' })
      res.end(response)
    }

    api[method](success)
  })
  .listen(8888, () => {
    console.log('server is start with port of 8888')
  })
