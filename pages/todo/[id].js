import { useRouter } from "next/router";
import { getTodoById } from "../../lib/api";

const Todo = (props) => {
  const { query } = useRouter();
  const { id } = query;
  const todo = props.todo || [];
  return (
    <>
      Todo : {id}
      <ul>
        <li>{todo.id}</li>
        <li>{todo.title}</li>
      </ul>
    </>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.params;
  const todo = await getTodoById(id);
  return {
    props: {
      todo,
    },
  };
}

// Todo.getStaticProps = () => {
//   return {
//     props: 1,
//   };
// };

// Todo.getStaticPaths = () => {
//   return {
//     paths: [],
//     fallback: false,
//   };
// };

export default Todo;
