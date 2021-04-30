const Router = require('express').Router
const Controller = require( '../controllers/productCategory' );

const router = Router();
const controller = new Controller();

router.post('/', controller.post );
router.get('/', controller.get );
router.get('/:id', controller.getById );
router.patch('/:id', controller.patch );
router.delete('/:id', controller.delete );

module.exports = router;