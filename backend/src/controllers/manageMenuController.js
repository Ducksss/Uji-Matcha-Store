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

exports.getMenuProducts = async (req, res) => {

    let results = await manageMenu.getMenuProducts()

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