const manageUserController = require('../controllers/manageUserController');

exports.route = router => {
    router.get('/api/u/user/create-account', manageUserController.addUser);
}