const Router = require('express').Router
const Controller = require( '../controllers/product' );

const router = Router();
const controller = new Controller();

router.post( '/', controller.postProduct );
router.get( '/', controller.getProduct );
router.get( '/:id', controller.getProduct );
router.patch( '/:id', controller.patchProduct );
router.delete( '/:id', controller.deleteProduct );

module.exports = router;