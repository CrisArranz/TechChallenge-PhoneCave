const data = require("../data/phones.json");

module.exports.getPhones = (req, res, next) => {
  res.json(data);
}

module.exports.getPhone = (req, res, next) => {
  const { id } = req.params;
  const phone = data.filter(tlf => tlf.id === parseInt(id));
  res.json(phone);
}