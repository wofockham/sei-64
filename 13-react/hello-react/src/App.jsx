import HelloWorld from "./HelloWorld";
import HelloUser from "./HelloUser";

function App() {
  return (
    <div>
      <HelloWorld />
      <HelloUser name="Groucho" />
      <HelloUser name="Harpo" />
      <HelloUser name="Chico" />
      <HelloUser />
    </div>
  );
}

export default App;
