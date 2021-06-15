import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/header';
import createCategory from './components/createCatogory';
import createVehicle from './components/createVehicle';
import vehicles from './components/ViewVehicles';
import catagory from './components/ViewCatogory';
import viewVehicleInfo from './components/viewVehiclesInfo';
import calcTripCharge from './components/calcTripCharge';
import updateVehicle from './components/updateVehicle';
import calcDuration from './components/calcDuration';

const App = () => {
    return (
        <div>
            <Router>
                <NavBar />
                <section>
                    <Switch>
                        <Route path="/" component ={calcTripCharge} exact/>
                        <Route path="/create-catogory" component={createCategory}/>
                        <Route path="/create-vehicle" component={createVehicle}/>
                        <Route path="/vehicles" component={vehicles}/>
                        <Route path="/catagory" component={catagory}/>
                        <Route path="/incatagory/:id" component={viewVehicleInfo}/>
                        <Route path="/vehicle/navigateUpdate/:id" component={updateVehicle}/>
                        <Route path="/calcDuration" component={calcDuration}/>
                    </Switch>
                </section>
            </Router>
        </div>
    );
};

export default App;