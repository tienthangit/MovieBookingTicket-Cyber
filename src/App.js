import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Detail from "./Pages/Details";
import Home from "./Pages/Home";



function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/detail" component={Detail}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
