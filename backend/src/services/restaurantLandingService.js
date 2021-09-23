// imports
const config = require('../config/config');
const pool = require('../config/database')

// Authenticates whether the user does exist and whether their email and password matches
module.exports.getProducts = (callback) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                console.log("Database connection error ", err);
                resolve(err);
            } else {
                try {
                    let query =
                                `SELECT *
                                FROM   sp_shop.category_tags ct
                                       INNER JOIN products p
                                               ON ct.fk_product_id = p.product_id
                                       INNER JOIN category c
                                               ON ct.fk_category_id = c.category_id 
                                `;
                    connection.query(query, (err, result) => {
                        if (err) {
                            console.log(err);
                            reject(err);
                        } else {
                           
                                resolve(result);
    
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