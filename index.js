const express = require('express')
const app = express()
const path = require('path')

app.set('view wngine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
    res.render('home.ejs')
})

app.get('/rand', (req, res) => {
    const random = Math.floor(Math.random() * 10) + 1
    res.render('random.ejs', { random: random })
})

app.listen(3000, () => {
    console.log('Listening on port 3k')
})
