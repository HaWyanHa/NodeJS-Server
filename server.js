
const express = require('express')
const hbs = require('hbs')


var app = express()

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'));


hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
})

app.use((request, response, next) => {
    response.render('maintenence.hbs', {
    })
})


hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase()
})

app.get('/', (request, response) => {
    //response.send('<h1>hello express</h1>');
    // response.send({
    //     name: 'Ryan',
    //     likes: [
    //         'Biking',
    //         'Eating'
    //     ]
    // })

    response.render('home.hbs', {
        pageTitle: 'About Page',
        //currentYear: new Date().getFullYear(),
        welcomeMessage: 'test'
    })
})

app.get('/about', (request, response) => {
    response.render('about.hbs', {
        pageTitle: 'About Page',
        //currentYear: new Date().getFullYear()
    })
})

app.get('/bad', (request, response) => {
    response.send({
        errorMessage: 'Unable to do'
    })
})

app.listen(3000, () => {
    console.log('server is up on port 3000')
})