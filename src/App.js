import { BrowserRouter, Route, Switch } from "react-router-dom";
import UserTemplate from "./HOC/UserTemplate";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <UserTemplate path="/signin" Component={SignIn} />
        <UserTemplate path="/signup" Component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
