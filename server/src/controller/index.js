const { getCarService } = require("../service");

async function getCarController(_req, res, next) {
  try {
    res.status(200).json(await getCarService());
    return next();
  } catch (error) {
    next(error);
  }
}

module.exports = { getCarController };
