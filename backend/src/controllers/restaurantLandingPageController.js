// Importing service's layer
const restaurantLandingPageService = require('../services/restaurantLandingService');

// Status codes
const { codes } = require('../config/codes')

// Get user information
exports.getProducts = async (req, res, next) => {
    try {
        let results = await restaurantLandingPageService.getProducts().catch((error) => {
            console.log(error)
            return
        });
        return res.status(200).send(results);
    } catch (error) {
        return res.status(500).send(codes(500));
    }
};