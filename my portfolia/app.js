const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')

const app = express()

/////////////// routes
const indexRouter = require('./routes/index')
const aboutMeRouter = require('./routes/aboutMe')
const projectsMeRouter = require('./routes/projects')
const rezumeMeRouter = require('./routes/rezume')

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static(path.join(__dirname, 'public')))
app.use('/images',express.static(path.join(__dirname, 'images')))

app.use('/', indexRouter)
app.use('/aboutMe', aboutMeRouter)
app.use('/projects', projectsMeRouter)
app.use('/rezume', rezumeMeRouter)

const PORT = process.env.PORT || 3001

app.listen(PORT, (req, res) => {
    console.log(`Server working on ${PORT} port`);
})
