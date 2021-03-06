const express = require('express');
const router = new express.Router();
const createVisitedRouter = require('./visited_controller.js')
const createToVisitRouter = require('./to_visit_controller.js')
const createScheduleRouter =require('./schedule_controller.js')
const createListRouter = require('./lists_controller.js')
const path = require('path')

const createIndexRouter = function(dbConnection){

  router.use('/visited', createVisitedRouter(dbConnection));
  router.use('/tovisit', createToVisitRouter(dbConnection));
  router.use('/schedule', createScheduleRouter(dbConnection));
  router.use('/lists', createListRouter());

  return router;
}

module.exports = createIndexRouter;
