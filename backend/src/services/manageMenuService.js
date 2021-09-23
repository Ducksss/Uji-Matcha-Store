const config = require('../config/config');
const pool = require('../config/database');

module.exports.getMenuCategory = (email, callback) => {
    try {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) {
                    console.log("Database connection error ", err);
                    resolve(err);
                } else {
                    let query = `SELECT catname FROM category`;
                    connection.query(query, [], (err, result) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result)
                        }
                        connection.release();
                    });
                }
            });
        });
    } catch (error) {
        reject(error)
    }
}

module.exports.getMenuProducts = (email, callback) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                console.log("Database connection error ", err);
                resolve(err);
            } else {
                try {
                    let query =
                        `SELECT product_title, brief_description, retail_price, stock_quantity FROM products`;
                    connection.query(query, [], (err, result) => {
                        if (err) {
                            console.log(err);
                            reject(err);
                        } else {
                            if (result.length == 1) {
                                resolve(result);
                            } else {
                                reject(result);
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
    });
}