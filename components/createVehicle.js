import React, { Component } from 'react';
import axios from 'axios';
import Select from 'react-select';

class createVehicle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name :'',
            code :'',
            model :'',
            type :'',
            categories :[],
            options :[],
            selectedCategoies :[]
        }
        this.onChange =this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onSelectedCategory = this.onSelectedCategory.bind(this);
    }
  
    componentDidMount() {
        axios.get('http://localhost:8080/categories/view')
        .then(response =>{
            this.setState({categories: response.data.data},()=>{
                console.log('categories',this.state.categories)//print category details in componentDidMount
                let data =[];
                this.state.categories.map((value, index)=>{//convert format to value label for react selet 
                    //to select multi categories
                    let category = {
                        value : value._id,
                        label : value.name
                    }
                    data.push(category);
                })
                this.setState({options : data})
                console.log('options' ,this.state.options)
            })
        })
    }
    onChange(event) {
        this.setState({ [event.target.name] : event.target.value })
    }
    onSelectedCategory(event) {
        this.setState({selectedCategoies: event ? event.map(category => category.value) :[] });
    }

    onSubmit(event){
        event.preventDefault();
        let vehicle = {
            name :this.state.name,
            code :this.state.code,
            model :this.state.model,
            type :this.state.type
        }
        console.log(vehicle);
        axios.post('http://localhost:8080/vehicles/add',vehicle)
        .then(response =>{
            alert('Data successfully added')
        }).catch(error =>{
            console.log('error',error.message);
        })
    }

    render() {
        return (
            <div className="container">
                <h3>Create Vehicle</h3>
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
                    <div class="mb-3">
                    <label for="type" className="form-label">Categories</label>
                        <Select
                        onChange={this.onSelectedCategory}
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

export default createVehicle;