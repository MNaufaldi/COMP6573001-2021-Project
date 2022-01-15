const { addBreed, updateBreed, deleteBreed } = require('./BreedMutations');
const { addCat, updateCat, deleteCat} = require('./CatMutation')

module.exports = {
    addBreed,
    updateBreed,
    deleteBreed,
    addCat,
    updateCat,
    deleteCat
}