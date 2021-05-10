const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/health', (req,res) => {
  res.send('health check - Server 1');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
