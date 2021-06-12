import React, { Component } from 'react';
import axios from 'axios';

class updateVehicle extends Component {
    constructor(props) {
        super(props);
        this.state = {
        name :'',
        code :'',
        model :'',
        type :''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
}
componentDidMount() {
    let pid  = this.props.match.params.id;
  axios.get(`http://localhost:8080/vehicles/getVehicleById/${pid}`)
  .then(response =>{
      this.setState({name : response.data.data.name})
      this.setState({code : response.data.data.code})
      this.setState({model: response.data.data.model})
      this.setState({type : response.data.data.type})
      console.log(this.state.name)
  }).catch(error=>{
      console.error(error.message);
  })
}   

onChange(event){
    this.setState({ [event.target.name] : event.target.value })    
}

onSubmit(event){
    event.preventDefault();
    let vehicle ={
        name :this.state.name,
        code : this.state.code,
        model : this.state.model,
        type : this.state.type
    }
    let pid  = this.props.match.params.id;
    console.log(vehicle)
    axios.put(`http://localhost:8080/vehicles/updateById/${pid}`,vehicle)
    .then(response=>{
        console.log("dfgfgf",response.data)
        alert("Data Sucessfully updated")
    }).catch(error=>{
        console.log('error',error.message);
    })
}
render() {
    return (
        <div className="container">
            <h3>Update Vehicle</h3>
            <form onSubmit={this.onSubmit}>
                <div className="mb-3">
                    <label hfor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" placeholder="Name" value={this.state.name} onChange={this.onChange} />
                </div>
                <div className="mb-3">
                    <label for="code" className="form-label">Code</label>
                    <input type="code" className="form-control" id="code" name="code" placeholder="Code"  value={this.state.code} onChange={this.onChange} />
                </div>
                <div class="mb-3">
                    <label for="model" className="form-label">Model</label>
                    <input type="model" className="form-control" id="model" name="model" placeholder="Model" value={this.state.model} onChange={this.onChange} />
                </div>
                <div class="mb-3">
                    <label for="type" className="form-label">Type</label>
                    <input type="type" className="form-control" id="type" name="type" placeholder="Type" value ={this.state.type} onChange={this.onChange} />
                </div>
               
                <button type="submit" className="btn btn-primary" /*onClick={this.onSubmit}*/>Submit</button>
            </form>
        </div>
    );
}
}

export default updateVehicle;