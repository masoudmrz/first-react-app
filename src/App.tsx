import Like from "./components/Like";

function App() {
  return (
    <div>
      <Like onClick={() => console.log("click")} />
    </div>
  );
}

export default App;
