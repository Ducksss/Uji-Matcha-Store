const manageMenuController = require('../controllers/manageMenuController');

exports.route = router => {
    //get products sorted into specific categories
    router.get('/api/u/user/categoryProducts/:category', manageMenuController.getCategoryProducts);

    //CRUD of products
    router.get('/api/u/user/menuProduct', manageMenuController.getMenuProduct);
    router.post('/api/u/user/menuProduct', manageMenuController.addMenuProduct);
    router.delete('/api/u/user/menuProduct', manageMenuController.deleteMenuProduct);
    router.put('/api/u/user/menuProduct', manageMenuController.updateMenuProduct);

    //CRUD of category
    router.get('/api/u/user/menuCategory', manageMenuController.getMenuCategory);
    router.post('/api/u/user/menuCategory', manageMenuController.addMenuCategory);
    router.delete('/api/u/user/menuCategory', manageMenuController.deleteMenuCategory);
    router.put('/api/u/user/menuCategory', manageMenuController.updateMenuCategory);

    //assign multiple categories
    router.post('/api/u/user/productCategory', manageMenuController.addProductCategory);
    router.delete('/api/u/user/productCategory', manageMenuController.removeProductCategory);
}