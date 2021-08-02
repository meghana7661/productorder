import logo from './logo.svg';
import './App.css';
import CreateOrderComponent from './components/CreateOrderComponent';
//import UpdateOrderComponent from './components/UpdateOrderComponent';
//import ViewOrderComponent from './components/ViewOrderComponent';
import EditOrder from './components/EditOrder';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import DashBoard from './components/DashBoard';
//import ListOrderComponent from './components/ListOrderComponent';
import AddOrder from './components/AddOrder';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
//import CreateOrderComponent from './components/CreateOrderComponent';
//import UpdateOrderComponent from './components/UpdateOrderComponent';
//import ViewOrderComponent from './components/ViewOrderComponent';
import AddOrderComponent from './components/AddOrderComponent';

function App() {
  return (
    <div>
    <Router>
          <HeaderComponent />
            <div className="container">
                <Switch> 
                      <Route path = "/" component={DashBoard} exact={true}></Route>
                      <Route path = "/orders" component={DashBoard} ></Route>
                      <Route path="/addorder" component={AddOrder} />
                      <Route path="/orderadd/:id" component={AddOrder} />
                      <Route path = "/edit-order/:id" component = {AddOrderComponent}></Route>
                      <Route path = "/addedit/:id" component = {EditOrder}></Route>
                     
                          {/* <Route path = "/update-order/:id" component = {UpdateOrderComponent}></Route> */}                
                          




                     
                </Switch>
            </div>
          <FooterComponent />
    </Router>
</div>
  );
}

export default App;