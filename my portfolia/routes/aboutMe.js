const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render('aboutMe',{
        title: 'Обо мне',
        isMe: true
    })
})

module.exports = router
