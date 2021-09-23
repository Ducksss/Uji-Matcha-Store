const config = require('../config/config');

const manageMenu = require('../services/manageMenuService');

//getMenuCategory
exports.getMenuCategory = async (req, res) => {

    let results = await manageMenu.getMenuCategory()

    if (results) {
        console.log(results)
        return res.status(200).send(results)
    } else {
        return res.status(500).send({
            error: true,
            code: 500,
            description: 'Internal Error',
            content: []
        });
    }
}

exports.getMenuProduct = async (req, res) => {

    let results = await manageMenu.getMenuProduct()

    if (results) {
        console.log(results)
        return res.status(200).send(results)
    } else {
        return res.status(500).send({
            error: true,
            code: 500,
            description: 'Internal Error',
            content: []
        });
    }
}

exports.getCategoryProducts = async (req, res) => {

    let category = req.params;
    let results = await manageMenu.getCategoryProducts(category)
    
    if (results) {
        console.log(results)
        return res.status(200).send(results)
    } else {
        return res.status(500).send({
            error: true,
            code: 500,
            description: 'Internal Error',
            content: []
        });
    }
}

exports.addMenuProduct = async (req, res) => {

    let {productTitle, bDescription, dDescription, costPrice, retailPrice, stockQuantity} = req.body;
    let results = await manageMenu.addMenuProduct(productTitle, bDescription, dDescription, costPrice, retailPrice, stockQuantity)
    
    if (results) {
        console.log(results)
        return res.status(200).send(results)
    } else {
        return res.status(500).send({
            error: true,
            code: 500,
            description: 'Internal Error',
            content: []
        });
    }
}

exports.deleteMenuProduct = async (req, res) => {

    let {productId} = req.body;
    let results = await manageMenu.deleteMenuProduct(productId)
    
    if (results) {
        console.log(results)
        return res.status(200).send(results)
    } else {
        return res.status(500).send({
            error: true,
            code: 500,
            description: 'Internal Error',
            content: []
        });
    }
}

exports.updateMenuProduct = async (req, res) => {

    let {productTitle, bDescription, dDescription, costPrice, retailPrice, stockQuantity, productId} = req.body;
    let results = await manageMenu.updateMenuProduct(productTitle, bDescription, dDescription, costPrice, retailPrice, stockQuantity, productId)
    
    if (results) {
        console.log(results)
        return res.status(200).send(results)
    } else {
        return res.status(500).send({
            error: true,
            code: 500,
            description: 'Internal Error',
            content: []
        });
    }
}

exports.addMenuCategory = async (req, res) => {

    let {catname,description} = req.body;
    let results = await manageMenu.addMenuCategory(catname,description)
    
    if (results) {
        console.log(results)
        return res.status(200).send(results)
    } else {
        return res.status(500).send({
            error: true,
            code: 500,
            description: 'Internal Error',
            content: []
        });
    }
}

exports.deleteMenuCategory = async (req, res) => {

    let {categoryId} = req.body;
    let results = await manageMenu.deleteMenuCategory(categoryId)
    
    if (results) {
        console.log(results)
        return res.status(200).send(results)
    } else {
        return res.status(500).send({
            error: true,
            code: 500,
            description: 'Internal Error',
            content: []
        });
    }
}

exports.updateMenuCategory = async (req, res) => {

    let {catname, description, categoryId} = req.body;
    let results = await manageMenu.updateMenuCategory(catname, description, categoryId)
    
    if (results) {
        console.log(results)
        return res.status(200).send(results)
    } else {
        return res.status(500).send({
            error: true,
            code: 500,
            description: 'Internal Error',
            content: []
        });
    }
}

exports.addProductCategory = async (req, res) => {

    let {product, category} = req.body;
    let results = await manageMenu.addProductCategory(product, category)
    
    if (results) {
        console.log(results)
        return res.status(200).send(results)
    } else {
        return res.status(500).send({
            error: true,
            code: 500,
            description: 'Internal Error',
            content: []
        });
    }
}
exports.removeProductCategory = async (req, res) => {

    let {product, category} = req.body;
    let results = await manageMenu.removeProductCategory(product, category)
    
    if (results) {
        console.log(results)
        return res.status(200).send(results)
    } else {
        return res.status(500).send({
            error: true,
            code: 500,
            description: 'Internal Error',
            content: []
        });
    }
}