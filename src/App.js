import { BrowserRouter, Route, Switch } from "react-router-dom";
import CinemaListInfo from "./Components/Cinema/cinemaListInfo";
import Header from "./Components/Header";
import Detail from "./Pages/Details";
import Home from "./Pages/Home";



function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/detail/:id" component={Detail}/>
        <Route exact path="/cinema/:id" component={CinemaListInfo}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
