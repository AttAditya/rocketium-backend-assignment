const express = require('express');
const apiRouter = express.Router();

const dataRouter = require('./data.route');
apiRouter.use("/data", dataRouter);

module.exports = apiRouter;