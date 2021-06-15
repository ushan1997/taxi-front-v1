import React, { Component } from 'react';
import axios from 'axios';
import Select from 'react-select';

class createCatogory extends Component {
    constructor(props) {
        super(props);
        this.state ={
            name:'',
            type:'',
            duration:0,
            vehicles : [],
            options :[],
            selectedVehicles : []
        }
        this.onChange =this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onSelectedVehicles = this.onSelectedVehicles.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:8080/vehicles/view')
        .then(response =>{
            this.setState({vehicles: response.data.data},()=>{
                console.log('vehicles',this.state.vehicles)
                let data =[];
                this.state.vehicles.map((value,index)=>{
                    let vehicle ={
                        value : value._id,
                        label : value.name
                    }
                    data.push(vehicle)
                })
                this.setState({options :data})
            });
        }).catch(err =>{
            console.log("Error",err.message)
        })
    }

    onChange(event) {
        this.setState({ [event.target.name] : event.target.value })
    }
    onSelectedVehicles(event) {
        this.setState({ selectedVehicles: event ? event.map(vehicle => vehicle.value) :[] });
    }
    onSubmit(event){
        event.preventDefault();
        let category = {
            name :this.state.name,
            type :this.state.type,
            duration :this.state.duration,
            vehicles :this.state.selectedVehicles

        }
        console.log(category);
        axios.post('http://localhost:8080/categories/add',category)
        .then(response =>{
            alert('Data successfully added')
        }).catch(error =>{
            console.log('error',error.message);
        })
    }
    

    render() {
        return (
            <div className = 'container'>
                <h3>Create Catogory</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="mb-3">
                        <label hfor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" name="name" placeholder="Name" 
                        value={this.state.name} onChange={this.onChange} />
                    </div>
                    <div className="mb-3">
                        <label for="type" className="form-label">Type</label>
                        <input type="type" className="form-control" id="type" name="type" placeholder="type"  
                        value={this.state.type} onChange={this.onChange} />
                    </div>
                    <div class="mb-3">
                        <label for="duration" className="form-label">Duration</label>
                        <input type="duration" className="form-control" id="duration" name="duration" placeholder="duration" 
                        value={this.state.duration} onChange={this.onChange} />
                    </div>
                    <div class="mb-3">
                    <label for="type" className="form-label">Vehicles</label>
                    <Select
                     onChange={this.onSelectedVehicles}
                     options={this.state.options}
                     className="basic-multi-select"
                     isMulti
                    />
                    </div>
                    <button type="submit" className="btn btn-primary" /*onClick={this.onSubmit}*/>Submit</button>
                </form>
            </div>
        );
    }
}

export default createCatogory;