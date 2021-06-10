import React, { Component } from 'react';
import axios from 'axios';

class ViewVehicles extends Component {
    constructor(props) {
        super(props);
        this.state={
            vehicles:[]
        };
    }
    componentDidMount() {
        axios.get('http://localhost:8080/vehicles/view')
            .then(response =>{
                console.log(response.data.data)
                this.setState({vehicles: response.data.data})
            }).catch(err =>{
                alert(err.message);
            })
    }
    
    render() {
        return (
            <div className ="container">
                <center><h3>Vehicles</h3></center>
                {this.state.vehicles.length>0 && this.state.vehicles.map((value,index)=>(
                    <div key={index} className="card mb-3">
                         <div className="p-3">
                            <h5>Name :{value.name}</h5>
                            <h5>Code :{value.code}</h5>
                            <h5>Model :{value.model}</h5>
                            <h5>Type :{value.type}</h5>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default ViewVehicles;