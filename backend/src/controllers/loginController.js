// imports
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const config = require('../config/config');

// Importing service's layer
const loginService = require('../services/loginService');

// Status codes
const { codes } = require('../config/codes')

// Get user information
exports.processUserLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        // Checking for invalid credentials
        let results = await loginService.authenticateUser(email).catch((error) => {
            return res.status(401).send(codes(401, 'Invalid Credentials.'));
        });

        // Checking for invalid credentials
        if ((password == null) || (results == null)) {
            return res.status(401).send(codes(401, 'Invalid Credentials.'));
        }

        // Checking for banned user
        if (results.status == 1) {
            return res.status(401).send(codes(401, 'Banned.'));
        }

        if (bcrypt.compareSync(password, results.password)) {
            let data = {
                userid: results.user_id,
                displayName: results.username,
                email: results.email,
                token: jwt.sign({
                    userId: results.user_id,
                    email: results.email,
                    companyId: results.company_id,
                    privilege: results.privilege
                },
                    config.JWTKey, {
                    expiresIn: 86400 //Expires in 24 hrs
                })
            };

            return res.status(200).send(data);
        } else {
            return res.status(401).send(codes(401, 'Login failed.'));
        }
    } catch (error) {
        return res.status(500).send(codes(500, 'Internal error'));
    }
}