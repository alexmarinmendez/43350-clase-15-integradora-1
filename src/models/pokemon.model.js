import mongoose from "mongoose"

const pokemonCollection = 'pokemons'

const pokemonSchema = new mongoose.Schema({
    type: String,
    code: { type: String, required: true },
    nombre: { type: String, unique: true, required: true },
    photo: {type: String, required: true}
})

const pokemonModel = mongoose.model(pokemonCollection, pokemonSchema)

export default pokemonModel

