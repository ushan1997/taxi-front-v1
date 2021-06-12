import React, { Component } from 'react';
import axios from 'axios';

class ViewCatogory extends Component {
    constructor(props) {
        super(props);
        this.state={
            categories:[]
        };
        this.onClickNavCatogory = this.onClickNavCatogory.bind(this);
    }
    componentDidMount(){
        axios.get('http://localhost:8080/categories/view')
        .then(response =>{
            console.log('catogory',this.state.categories)
            this.setState({categories:response.data.data});
        })
    }
    onClickNavCatogory(event,id){
        event.preventDefault();
        window.location = `/incatagory/${id}`
    }
    render() {
        return (
            <div className="container">
                <center> <h3>Catogory</h3></center>
                {this.state.categories.length>0 && this.state.categories.map((value, index)=>(
                    <div key={index} className="card mb-3" onClick={event => this.onClickNavCatogory(event,value._id)}>
                        <div className="p-3">
                        <h5>CatogoryName: {value.name}</h5>
                        <h5>Duration    : {value.duration}</h5>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default ViewCatogory;