
const path = require('path')
const express = require('express')
const hbs = require('hbs')


const app = express()
const publicDirectory = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
app.use(express.static(publicDirectory))
hbs.registerPartials(partialsPath)


app.get('', (req, res) => {
    //res.send() - For static route
    res.render('index', {
        title: 'index page',
        name: 'Name of index',
        footer: 'created by BagMan'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        name: 'About page',
        footer: 'created by BagMan'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        name: 'HELP page',
        footer: 'created by BagMan'
    })
})

app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send(
            'Still need the address'
        )}
    res.send({
        forecast: 'it is snowing',
        location: 'Mexico',
        address: req.query.address
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        name: '404',
        footer: 'Help article not found'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        name: '404',
        message: 'page not found'  
    })
})



app.listen(3000, () =>{
    console.log('Server running at 3001 port')
})
