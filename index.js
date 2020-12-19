const express = require('express')
const fetch = require('node-fetch')
const app = express()
const path = require('path')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
    res.render('home.ejs')
})

app.get('/cats', (req, res) => {
    const cats = [
        'cat 1',
        'cat 2',
        'catdfhdfh',
        'cat 4',
        'cat 5',
        'cat 6',
        'cat 7',
    ]
    res.render('cats.ejs', { cats })
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params
    res.render('subreddit.ejs', { subreddit })
})
app.get('/rand', (req, res) => {
    const random = Math.floor(Math.random() * 10) + 1
    res.render('random.ejs', { random: random })
})

app.listen(3000, () => {
    console.log('Listening on port 3k')
})

// const hello = async () => {
//     const responce = await fetch('https://type.fit/api/quotes')
//     const data = await responce.json()
//     const quoteData = {
//         text: data[5].text,
//         author: data[5].author,
//     }
//     return quoteData
// }

// hello().then((quote) => console.log(quote.text, quote.author))
