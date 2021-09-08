// import "./App.css";
import "./styles/topheader.scss";
import "./styles/index.scss";
import "./styles/header.scss";
import "./App.scss";
import "./components/Topheader";
import Header from "./components/Header";
import Topheader from "./components/Topheader";
import Index from "./components/Index";

function App() {
  return (
    <div className="App">
      <Topheader />

      <Header />
      <Index />
    </div>
  );
}

export default App;
