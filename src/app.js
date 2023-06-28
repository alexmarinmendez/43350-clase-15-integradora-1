import express from 'express'
import handlebars from 'express-handlebars'
import mongoose, { mongo } from 'mongoose'
import pokemonRouter from './routers/pokemon.router.js'
import viewsRouter from './routers/views.router.js'

const app = express()
app.use(express.json())

app.engine('handlebars', handlebars.engine())
app.set('views', './src/views')
app.set('view engine', 'handlebars')
app.use(express.static('./src/public'))

app.get('/', (req, res) => res.send('Work great!'))
app.use('/pokemons', viewsRouter)
app.use('/api/pokemons', pokemonRouter)

mongoose.set('strictQuery', false)
try {
    await mongoose.connect('mongodb+srv://coder:coder@cluster0.19xxo4x.mongodb.net/integradora1', {
        useUnifiedTopology: true,
    })
    app.listen(8080, () => console.log('Server Up!'))
} catch(err) {
    console.log(err.message)
}
