import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
//import NewUser from "./pages/newUser/user";
import ProductList from "./pages/Historiquedemande/HistoriquedemandeList";
import Cordonnee from "./pages/cordonnee/cordonnee";
import NewProduct from "./pages/cordonnee/cordonnee";
import HistoriquedemandeList from "./pages/Historiquedemande/HistoriquedemandeList";


function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/userList">
            <UserList />
          </Route>
          <Route path="/user">
            <User/>
          </Route>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/HistoriquedemandeList">
            <HistoriquedemandeList />
          </Route>
          <Route path="/cordonee">
            <Cordonnee />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;