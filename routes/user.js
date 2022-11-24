
const { Router } = require('express');
const { store, 
        index,
        update, 
        destroy } = require('../controllers/user');

const router = Router();

router.get( '/', index );

router.post( '/', store );

router.put( '/:id', update )

router.delete( '/:id', destroy )


module.exports = router;