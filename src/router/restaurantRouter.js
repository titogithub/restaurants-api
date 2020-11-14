var express = require("express"),
  router = express.Router(),
  restaurantController = require("../controller/restaurantController");

module.exports = (app) => {
  // Check service health
  router.get('/', (req, res) => {
    res.json({
      state: 200,
      message: 'running',
    });
  });

  router.route("/restaurant").get(restaurantController.get);
  router.route("/restaurant").post(restaurantController.post);

  app.use('/api/', router);
};
