const restaurantLandingPageController = require('../controllers/restaurantLandingPageController');

exports.route = router => {
    router.get('/api/u/user/products', restaurantLandingPageController.getProducts);
}