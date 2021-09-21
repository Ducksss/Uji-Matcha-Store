// imports
const config = require('../config/config');
const pool = require('../config/database')

// Authenticates whether the user does exist and whether their email and password matches
module.exports.authenticateUser = (email, callback) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                console.log("Database connection error ", err);
                resolve(err);
            } else {
                try {
                    let query =
                        `SELECT 
                                    * 
                                FROM 
                                    sp_shop.users 
                                WHERE 
                                    email = ?
                                `;
                    connection.query(query, [email], (err, result) => {
                        if (err) {
                            console.log(err);
                            reject(err);
                        } else {
                            if (result.length == 1) {
                                resolve(result[0]);
                            } else {
                                reject(result[0]);
                            }
                        }
                        connection.release();
                    });
                } catch (error) {
                    console.log(err);
                    resolve(err);
                }
            }
        });
    }); // End of getConnection
} // End of authenticate