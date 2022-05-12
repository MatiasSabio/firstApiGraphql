const Task = require('./models/Task');

const resolvers = {
  Query: {
    hello: () => 'Hello word',
    getAllTasks: async () => {
      const tasks = await Task.find();
      return tasks;
    },
    async getTask(_, { id }) {
      const task = await Task.findById(id);
      return task;
    },
  },

  Mutation: {
    createTask: async (_, { task }) => {
      // como le pase un type input ,
      //  me llega un obj , que tiene un obj task:{title, description}
      const { title, description } = task;
      const newTask = new Task({ title, description });
      await newTask.save();
      console.log(newTask);
      return newTask;
    },
    async deleteTaks(_, { id }) {
      await Task.findByIdAndDelete(id);
      return 'Task deleted successfully';
    },
    async updateTaks(_, { id, task }) {
      const taskUpdated = await Task.findByIdAndUpdate(
        id,
        { $set: task },
        // $set lo que hace es cambiar solo lo que mandamos sin tocar lo demas, sino lo reescribiria
        { new: true },
      );
      return taskUpdated;
    },
  },
};
module.exports = { resolvers };
