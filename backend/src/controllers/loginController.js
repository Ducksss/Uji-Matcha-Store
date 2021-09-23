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
        console.log("Here is still successful - 1")
        let results = await loginService.authenticateUser(email).catch((error) => {
            return res.status(401).send(codes(401, 'Invalid Credentials.'));
        });

        // Checking for invalid credentials
        console.log("Here is still successful - 2")
        if ((password == null) || (results[0] == null)) {
            return res.status(401).send(codes(401, 'Invalid Credentials.'));
        }

        // Checking for banned user
        console.log("Here is still successful - 3")
        if (results[0].status == 1) {
            return res.status(401).send(codes(401, 'Banned.'));
        }

        if (bcrypt.compareSync(password, results[0].password)) {
            let data = {
                userid: results[0].user_id,
                displayName: results[0].username,
                email: results[0].email,
                token: jwt.sign({
                    userId: results[0].user_id,
                    email: results[0].email,
                    type: results[0].type
                },
                    config.JWTKey, {
                    expiresIn: 86400 //Expires in 24 hrs
                })
            };

            console.log("Here is still successful - 4")
            // console.log(data)
            return res.status(200).send(data);
        } else {
            return res.status(401).send(codes(401, 'Login failed.'));
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send(codes(500, 'Internal error'));
    }
}