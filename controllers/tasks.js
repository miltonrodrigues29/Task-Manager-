const getAllTasks = (req, res) => {
  res.send("All Items");
};

const createTask = (req, res) => {
  res.json(req.body);
};

const getTask = (req, res) => {
  res.send("get task");
};

const updateTask = (req, res) => {
  res.send("delete task");
};

const deleteTask = (req, res) => {
  res.send("All Items");
};

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  getTask,
};
