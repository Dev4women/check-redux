import "./styles.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import 'bootstrap/dist/css/bootstrap.css'
function App() {
  return (
    <div className="App m-5">
      <Header />
      <TodoList />
    </div>
  );
}

export default App;
