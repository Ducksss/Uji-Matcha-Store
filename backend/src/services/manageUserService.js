// imports
config = require('../config/config');
const pool = require('../config/database')

module.exports.addUser = (username, email, contact, password, address) => {
    return new Promise((resolve, reject) => {
        pool.getConnection(async (err, connection) => {
            if (err) {
                reject(err);
            } else {
                try {
                    //stores current into repository of history
                    let query = `INSERT INTO sp_shop.users (
                                    username, email, password, address, 
                                    contact_number
                                ) 
                                VALUES 
                                    (?, ?, ?, ?, ?)`;
                    connection.query(query, [username, email, password, address, contact], (err, results) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(results);
                        }
                        connection.release();
                    });
                } catch (error) {
                    reject(err);
                }
            }
        });
    })
};