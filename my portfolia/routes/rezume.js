const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render('rezume',{
        title: 'Rezume',
        isRezume: true
    })
})

module.exports = router