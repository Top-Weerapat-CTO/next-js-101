import axios from "axios";

export const getTodoById = async (id) => {
  const res = await axios(`https://jsonplaceholder.typicode.com/todos/${id}`);
  return res.data;
};
