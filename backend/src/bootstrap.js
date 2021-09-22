const loginRoute = require('./routes/loginRoute')
const manageUserRoute = require('./routes/manageUserRoute')

module.exports = (app, router) => {
    loginRoute.route(router)
    manageUserRoute.route(router)
};