const loginController = require('../controllers/loginController');

exports.route = router => {
    router.get('/api/u/user/signin', loginController.processUserLogin);
}