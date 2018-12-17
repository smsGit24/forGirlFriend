module.exports = function(req, fn) {
  let params = {}
  req.on('data', chunk => {
    const data = JSON.parse(chunk.toString())
    params = { ...params, ...data }
  })
  req.on('end', () => {
    fn(params)
  })
}
