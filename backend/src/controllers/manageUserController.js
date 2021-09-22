// imports
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const moment = require("moment-timezone");
const config = require('../config/config');
const nodeMailer = require('nodemailer');
const { codes } = require('../config/codes')

// services
const manageUsers = require('../services/manageUserService')

// configs
const transporter = nodeMailer.createTransport({
    service: 'Gmail',
    auth: {
        user: config.GMAIL_USER,
        pass: config.GMAIL_PASS,
    }
})

// Used by the secondary admin to add the user into the account with valid check
exports.addUser = async (req, res, next) => {
    try {
        let status = 0, type = "Customer";
        let { username, email, contact, password, address } = req.body;
        if (!(username && email && contact && password && address)) {
            console.log("Here fail 1");
            return res.status(401).send(codes(401, 'Missing information.'));
        }

        let hashedPassword = await bcrypt.hash(password, 10);
        await manageUsers.addUser(username, email, contact, hashedPassword, address).catch((error) => {
            return res.status(401).send(codes(500, 'Internal error.'));
        });

        return res.status(200).send(codes(200));
    } catch (error) {
        return res.status(500).send(codes(500));
    }
};