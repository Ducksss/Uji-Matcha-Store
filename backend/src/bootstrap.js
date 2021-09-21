const loginRoute = require('./routes/loginRoute')

module.exports = (app, router) => {
    loginRoute.route(router)
};