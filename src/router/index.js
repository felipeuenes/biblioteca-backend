const { Router } = require('express');
const router = Router();

const controllers = require('../controllers')


router.get('/', (req, res) => {
    res.send('teste de get')
})

router.get('/livros', controllers.read)
router.delete('/livros/:id', controllers.delete)
router.post('/cadastroLivros', controllers.create)
router.put('/livros/:id', controllers.update)

module.exports = router;