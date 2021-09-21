// imports
config = require('../config/config');
const pool = require('../config/database')

module.exports.addUser = (blockNumber, blockLevel, unitLevel, addressLine, country, region, city, postalCode) => {
    return new Promise((resolve, reject) => {
        pool.getConnection(async (err, connection) => {
            if (err) {
                reject(err);
            } else {
                try {
                    //stores current into repository of history
                    let query = `INSERT INTO eiso_management_database.addresses(
                                    block_no, block_level, unit_no, address_line_1, 
                                    city, state, country, postal_code
                                ) 
                                VALUES 
                                    (?, ?, ?, ?, ?, ?, ?, ?)
                                
                                `;
                    connection.query(query, [blockNumber, blockLevel, unitLevel, addressLine, city, region, country, postalCode], (err, results) => {
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