const httpResponseHandler = require('../service/httpResponseHandler');
const { attributes } = require('../service/restaurantValidation');
const restaurants = require('../models/restaurant').resturants;
module.exports = {
  get: (req, res, next) => {
    try {

      const restaurantsResults = restaurants.filter( v => {
        const kindOfRestaurant = req.query.kindOfRestaurant;
        return (kindOfRestaurant) ? v.kindOfRestaurant === kindOfRestaurant : true;
      });

      httpResponseHandler.sendSuccess(res, restaurantsResults);
    } catch (error) {
      next(error);
    }
  },
  post: (req, res, next) => {
    try {
      const newRestaurant = attributes(req.body);
      const restaurant = restaurants.find( v => v.name === newRestaurant.name);
      if (restaurant) {
        return httpResponseHandler.sendInvalidReq(res, 'restaurant already created', 400);
      }
      restaurants.push(newRestaurant);
      return httpResponseHandler.sendCreate(res, newRestaurant);
    } catch (error) {
      next(error);
    }
  },
};
