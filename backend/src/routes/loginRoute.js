const loginController = require('../controllers/loginController');

exports.route = router => {
    router.post('/api/u/user/signin', loginController.processUserLogin);
}