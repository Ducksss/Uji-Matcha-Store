const config = require('../config/config');
const pool = require('../config/database');

module.exports.getMenuCategory = () => {
    try {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) {
                    console.log("Database connection error ", err);
                    resolve(err);
                } else {
                    let query = `SELECT * FROM category`;
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

module.exports.getMenuProduct = () => {
    try {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) {
                    console.log("Database connection error ", err);
                    resolve(err);
                } else {
                    let query = `SELECT *FROM products`;
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

module.exports.getMenuProduct = (category) => {
    try {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) {
                    console.log("Database connection error ", err);
                    resolve(err);
                } else {
                    let query = `SELECT *
                            FROM   
                                sp_shop.category_tags ct
                            INNER JOIN 
                                products p 
                            ON 
                                ct.fk_product_id = p.product_id
                            INNER JOIN 
                                category c
                                ON ct.fk_category_id = c.category_id
                                WHERE c.category_id = ?`;
                    connection.query(query, [category], (err, result) => {
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

module.exports.addMenuProduct = (productTitle, bDescription, dDescription, costPrice, retailPrice, stockQuantity) => {
    try {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) {
                    console.log("Database connection error ", err);
                    resolve(err);
                } else {
                    let query = `INSERT INTO 
                            products (product_title, brief_description, detail_description, cost_price, retail_price, stock_quantity)
                                VALUES
                            (?, ?, ?, ?, ?, ?);`;
                    connection.query(query, [productTitle, bDescription, dDescription, costPrice, retailPrice, stockQuantity], (err, result) => {
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

module.exports.deleteMenuProduct = (productId) => {
    try {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) {
                    console.log("Database connection error ", err);
                    resolve(err);
                } else {
                    let query = `DELETE products, category_tags FROM products INNER JOIN category_tags ON products.product_id = category_tags.fk_product_id WHERE products.product_id = ?`;
                    connection.query(query, [productId], (err, result) => {
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

module.exports.updateMenuProduct = (productTitle, bDescription, dDescription, costPrice, retailPrice, stockQuantity, productId) => {
    try {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) {
                    console.log("Database connection error ", err);
                    resolve(err);
                } else {
                    let query = `UPDATE products 
                                SET product_title = ?, brief_description = ?, detail_description = ?, cost_price = ?, retail_price = ?, stock_quantity = ?
                                WHERE product_id = ?`;
                    connection.query(query, [productTitle, bDescription, dDescription, costPrice, retailPrice, stockQuantity, productId], (err, result) => {
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

module.exports.addMenuCategory = (catname, description) => {
    try {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) {
                    console.log("Database connection error ", err);
                    resolve(err);
                } else {
                    let query = `INSERT INTO 
                            products (catname, description)
                                VALUES
                            (?, ?);`;
                    connection.query(query, [catname, description], (err, result) => {
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

module.exports.deleteMenuCategory = (categoryId) => {
    try {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) {
                    console.log("Database connection error ", err);
                    resolve(err);
                } else {
                    let query = `DELETE category, category_tags FROM category INNER JOIN category_tags ON category.category_id = category_tags.fk_category_id WHERE category_tags.fk_category_id = ?`;
                    connection.query(query, [categoryId], (err, result) => {
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

module.exports.updateMenuCategory = (catname, description, categoryId) => {
    try {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) {
                    console.log("Database connection error ", err);
                    resolve(err);
                } else {
                    let query = `UPDATE products 
                                SET catname = ?, description = ?
                                WHERE categoryId = ?`;
                    connection.query(query, [catname, description, categoryId], (err, result) => {
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

module.exports.addProductCategory = (product, category) => {
    try {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) {
                    console.log("Database connection error ", err);
                    resolve(err);
                } else {
                    let query = `INSERT INTO 
                            category_tags (fk_product_id, fk_category_id)
                                VALUES
                            (?, ?);`;
                    connection.query(query, [product, category], (err, result) => {
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

module.exports.removeProductCategory = (product, category) => {
    try {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) {
                    console.log("Database connection error ", err);
                    resolve(err);
                } else {
                    let query = `DELETE FROM category_tags WHERE fk_product_id = ? AND fk_category_id =?`;
                    connection.query(query, [product, category], (err, result) => {
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