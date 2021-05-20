const Store = require("../../models/store");

module.exports = {
  index,
  create,
};

async function index(req, res) {
  const stores = await Store.find({});
  res.status(200).json(stores);
}
async function create(req, res) {
  req.body.user = req.user;
  const store = await Store.create(req.body);
  res.status(201).json(store);
}

