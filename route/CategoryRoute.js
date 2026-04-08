const express =require('express')
const router =express.Router();

const CategoryController=require('../controller/CategoryController');

router.post('/create-category', CategoryController.createCategory);
router.put('/update-category/:id', CategoryController.updateCategory);
router.delete('/delete-category/:id', CategoryController.deleteCategory);
router.get('/find-category-by-id/:id', CategoryController.findCategoryById);
router.get('/find-all-categories', CategoryController.findAllCategories);

module.exports=router;