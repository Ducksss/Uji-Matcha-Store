const manageUserController = require('../controllers/manageUserController');

exports.route = router => {
    router.post('/api/u/user/create-account', manageUserController.addUser);
}