import { BrowserRouter, Route, Switch } from "react-router-dom";
import UserTemplate from "./Templates/UserTemplate";
import Header from "./Components/Header";
import Detail from "./Pages/Details";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";



function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Header/>
        <UserTemplate path="/signin" Component={SignIn} />
        <UserTemplate path="/signup" Component={SignUp} />
        <Route exact path="/" component={Home}/>
        <Route exact path="/detail" component={Detail}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
