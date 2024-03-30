const express = require('express')
const router = express.Router()
const upload = require('../middleware/imageUpload')

const {
    createProduct,
    getProduct
} = require('../controllers/product')
const requireAuth = require('../middleware/userAuth')

router.use(requireAuth)

//getting data
router.get('/',getProduct)

//posting data
router.post('/',upload.single("image"), createProduct)

//getting one data
router.get('/:id')

//updating data
router.patch('/:id')

//deleting data
router.delete('/:id')

module.exports = router