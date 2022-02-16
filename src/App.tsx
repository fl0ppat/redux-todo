import { Container, SimpleGrid } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import { Header } from "./components/Header";
import { Task } from "./components/Task";

function App() {
  const todos = useSelector((state: RootState) => state.todo)
  return (
    <div className="App">
      <Header count={todos.length} />
      <Container>
        <SimpleGrid minChildWidth={320} columns={3} spacing={32}>
          {todos.map(todo => <Task key={todo.uuid} data={todo} />)}
        </SimpleGrid>
      </Container>
    </div>
  );
}

export default App;
