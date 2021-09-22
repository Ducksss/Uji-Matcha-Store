const jwt = require("jsonwebtoken");
const config = require('../config/config');
const { codes } = require('../config/codes')

const manageUserService = require('../services/manageUserService')

exports.isLoggedIn = async (req, res, next) => {
    console.log("DIE OOO")
    let auth = req.headers.authorization;
    if (!auth) return res.status(400).send(codes(400, 'Invalid Request'));

    try {
        let token = auth.split(' ')[1];
        let { userId, email } = jwt.verify(token, config.JWTKey);

        console.log("DIE OOO")
        let getLoggedInData = await manageUserService.isLoggedIn(userId, email);
        if (getLoggedInData.length == 1) {
            let getSuspendedAccount = await manageUserService.isSuspended(userId);
            if (getSuspendedAccount[0].status == 0) {
                // not banned
                req.userId = userId;
                req.email = email;
                next();
            } else {
                // banned
                return res.status(403).send(codes(403));
            }
        } else {
            return res.status(401).send(codes(401));
        }
    } catch (error) {
        console.log(error)
        if (error.expiredAt) {
            return res.status(401).send(codes(401));
        }
        return res.status(400).send(codes(400));
    }
}