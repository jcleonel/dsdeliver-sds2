import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import Orders from "./Orders";

function Routes() {
    return(
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/orders" component={Orders} />            
            </Switch>
        </BrowserRouter>
    )
    
}

export default Routes;