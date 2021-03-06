const router = require('express').Router();

const { isLogged } = require('../middlewares/middlewares')

const {
 createOrder, allOrders, allOrdersUser, detailOrder, updateOrder, deleOrder
} = require('../controllers/order')

router.post('/order/create', createOrder)

router.get('/order/all', allOrders)
router.get('/order/all/myorders', allOrdersUser)
router.get('/order/:id', detailOrder)

router.patch('/order/edit/:id', isLogged, updateOrder)

router.delete('/order/:id', isLogged, deleOrder)


module.exports = router;