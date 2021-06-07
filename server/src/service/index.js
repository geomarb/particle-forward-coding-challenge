const fs = require("fs/promises");
const path = require("path");

var car;

async function getCarService() {
  if (!car) {
    const foundCar = JSON.parse(
      await fs.readFile(`${path.join(__dirname, "../../data")}/index.json`),
    );
    car = { title: foundCar.title, images: foundCar.images };
  }
  return car;
}

module.exports = { getCarService };
