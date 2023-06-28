import { Router } from 'express'

const router = Router()

//html onwire
router.get('/', (req, res) => {
    res.render('list', {})
})

export default router