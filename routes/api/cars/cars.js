const Router = require("express").Router;
const db = require("../../../config/database");

function ApiRouterCar() {
  const router = Router();

  // List Car
  router.get("/", async (req, res) => {
    const data = await db.select("*").from("cars");
    res.status(200).json({
      data,
    });
  });

  // Single Car
  router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const data = await db.select("*").from("cars").where("cars_id", "=", id);
    if (!data[0]) {
      return res.status(404).send({
        message: "Car not found",
      });
    } else {
      res.status(200).json({
        data,
      });
    }
  });

  // Create Car
  router.post("/", (req, res) => {
    const data = req.body;
    db.insert(data).into("cars");
    res.status(201).send({
      message: "Created Successfully!",
    });
  });

  // Update Car
  router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    await db("cars").update(data).where("cars_id", "=", id);
    res.status(201).json({
      message: "Data has been updated!",
      data,
    });
  });

  // Delete Car
  router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    await db("cars").del().where("cars_id", "=", id);
    res.status(200).json({
      message: `Deleted car with ID ${id}`,
    });
  });

  return router;
}

module.exports = ApiRouterCar;
