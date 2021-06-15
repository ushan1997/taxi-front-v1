import React, { Component } from 'react';
import axios from 'axios';
import Select from 'react-select';

class calcDuration extends Component {
    constructor(props) {
        super(props);
        this.state={
            categories :[],
            options :[],
            selectedCategoies :[],
            total :0
        };
        this.onSelectedCategory = this.onSelectedCategory.bind(this);
        this.onCalculate = this.onCalculate.bind(this);
    }
    componentDidMount() {
        axios.get('http://localhost:8080/categories/view')
        .then(response =>{
            this.setState({categories : response.data.data},()=>{
                console.log(this.state.categories)
               
                let data =[];
                this.state.categories.map((value,index)=>{
                    let category ={
                        value : value._id,
                        label : value.name,
                        duration : value.duration
                    }
                    data.push(category)
                    console.log(data)
                })
                this.setState({options : data})
            });
        }).catch(error =>{
            console.log(error.message)
        })
    }
    onSelectedCategory(event){
        this.setState({ selectedCategoies: event ? event.map(category => category.value) :[] });
        console.log("selected category :",this.state.selectedCategoies)
    }
    onCalculate(event){
        event.preventDefault();
        
        console.log(this.state.selectedCategoies)
        this.state.selectedCategoies.map((id)=>{
            let totalduration =0;
            console.log(id)
            axios.get(`http://localhost:8080/categories/getDuration/${id}`)
            .then((response)=>{
                totalduration =response.data.data +totalduration;
                this.setState({total :totalduration})
                console.log(this.state.total)
            })
        })
        alert(this.state.total)
    }

    render() {
        return (
                 <div className = 'container'>
                <h3>Calculate Duration</h3>
                <form onSubmit={this.onCalculate}>
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

export default calcDuration;