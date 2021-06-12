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
    navigateUpdate(event,id){
        event.preventDefault();
        window.location = `/vehicle/navigateUpdate/${id}`
    }
    navigateDelete(event,id){
        axios.delete(`http://localhost:8080/vehicles/deleteById/${id}`)
        .then(response =>{
            alert("Data deleted successfully")
            window.location = `/vehicles`
        }).catch(error =>{
            console.log(error);
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
                            <button className="btn btn-warning" onClick={event =>this.navigateUpdate(event,value._id)}>Update Vehicle</button>
                            <button className="btn btn-danger" onClick={event =>this.navigateDelete(event,value._id)}>Delete Vehicle</button>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default ViewVehicles;