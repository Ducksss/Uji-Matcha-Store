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

module.exports.isLoggedIn = (userId, email) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                resolve(err);
            } else {
                let query = `SELECT 
                                user_id 
                            FROM 
                                sp_shop.users 
                            where 
                                user_id = ? 
                                and email = ?;
                            `;
                connection.query(query, [userId, email], (err, results) => {
                    if (err) {
                        console.log(err)
                        reject(err)
                    } else {
                        resolve(results)
                    }
                    connection.release()
                })
            }
        })
    })
}

module.exports.isSuspended = (userId) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                resolve(err);
            } else {
                let query = `SELECT 
                                status 
                            from 
                                sp_shop.users 
                            where 
                                user_id = ? 
                            `;

                connection.query(query, [userId], (err, results) => {
                    if (err) {
                        console.log(err)
                        reject(err)
                    } else {
                        resolve(results)
                    }
                    connection.release()
                })
            }
        })
    })
}

module.exports.getRole = (userId) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                resolve(err);
            } else {
                let query = `SELECT 
                                type 
                            FROM 
                                sp_shop.users 
                            where 
                                user_id = ?;
                            `;
                connection.query(query, [userId], (err, results) => {
                    if (err) {
                        console.log(err)
                        reject(err)
                    } else {
                        resolve(results)
                    }
                    connection.release()
                })
            }
        })
    })
}