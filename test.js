const fetch = require('node-fetch')

const hello = async () => {
    const responce = await fetch('https://type.fit/api/quotes')
    const data = await responce.json()
    const quoteData = {
        text: data[5].text,
        author: data[5].author,
    }
    return quoteData
}

hello().then((quote) => console.log(quote.text, quote.author))
