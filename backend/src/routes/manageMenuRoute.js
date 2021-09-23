const manageMenuController = require('../controllers/manageMenuController');

exports.route = router => {
    router.get('/api/u/user/getMenuCategory', manageMenuController.getMenuCategory);
    router.get('/api/u/user/getMenuProducts', manageMenuController.getMenuProducts);
}