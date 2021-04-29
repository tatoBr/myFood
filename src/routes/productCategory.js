const Router = require('express').Router
const Controller = require( '../controllers/productCategory' );

const router = Router();
const controller = new Controller();

router.post('/', controller.postProductCategory );
router.get('/', controller.getProductCategory );
router.get('/:id', controller.getProductCategory );
router.patch('/:id', controller.patchProductCategory );
router.delete('/:id', controller.deleteProductCategory );

module.exports = router;