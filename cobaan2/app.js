const express = require('express')
const app = express()
const port = 3000
const router = require('./router/router')
// app.get('/', (req, res) => {
//     res.send('Hello World! app')
// })
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use('/', router)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})