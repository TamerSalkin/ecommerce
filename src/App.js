import "./styles/app.scss";
import Header from "./components/Header";

function App() {
  // BEM
  return (
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}

export default App;
