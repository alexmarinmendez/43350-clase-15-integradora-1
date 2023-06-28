//data onwire
import { Router } from 'express'
import pokemonModel from '../models/pokemon.model.js'

const router = Router()

router.get('/', async (req, res) => {
    const result = await pokemonModel.find()
    res.status(200).json({ status: 'success', payload: result })
})

router.get('/:name', (req, res) => {
    const name = req.params.name
    // res.send('Mostrando el pokemon ' + name)
    res.status(200).json({ status: 'success', payload: `Mostrando el pokemon ${name}` })
})

router.post('/', async (req, res) => {
    const pokemonNew = req.body
    try {
        const pokemon = new pokemonModel(req.body)
        const result = await pokemon.save()
        res.status(201).json({ status: 'success', payload: result })
    } catch(err) {
        res.status(500).json({ status: 'error', error: err.message })
    }
})

export default router