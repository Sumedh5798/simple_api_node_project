const express=require('express');
const router=express.Router();
const {getProducts,getProcutsId,postProducts,updataProducts,deleteProducts}=require('../controllers/handlers.js');


router.get('/',getProducts);

router.get('/:id',getProcutsId);

router.post('/',postProducts);

router.patch('/:id',updataProducts);

router.delete('/:id',deleteProducts);


module.exports=router;