import Table from "./Containers/Table";
import CreateTodo from "./Containers/CreateTodo";

function App() {
  return (
    <div className="container">
      <CreateTodo />
      <Table />
    </div>
  );
}

export default App;