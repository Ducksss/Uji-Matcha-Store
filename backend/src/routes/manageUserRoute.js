const manageUserController = require('../controllers/manageUserController');
const middlewares = require('../middlewares/middleware')

exports.route = router => {
    router.post('/api/u/user/create-account', manageUserController.addUser);
    router.get('/api/u/user/role', middlewares.isLoggedIn, manageUserController.verifyRole);
}