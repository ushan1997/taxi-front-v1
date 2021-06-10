import React, { Component } from 'react';

class calcTripCharge extends Component {
    constructor(props) {
        super(props);
        this.state = {
            duration:'',
            total:''
        }
        this.onChange = this.onChange.bind(this);
        this.calculateTripCharge =this.calculateTripCharge.bind(this)
    }
    onChange(event) {
        this.setState({duration : event.target.value})
    }
    calculateTripCharge(event){
        event.preventDefault();
        console.log(this.state.duration)
        let amount = this.state.duration;
        let total = amount*10;
        this.setState({total : total})
        console.log(this.state.total)
    }

    render() {
        return (
            <div className = 'container'>
                <h3>Calculate the trip charges</h3>
                <form>
                    <h5>{this.state.total}</h5>
                    <div className="mb-3">
                        <label hfor="name" className="form-label">Vehicle</label>
                        <input type="text" className="form-control" placeholder="vehicle" />
                    </div>
                    <div className="mb-3">
                        <label for="type" className="form-label">Trip type</label>
                        <input type="type" className="form-control" placeholder="type" />
                    </div>
                    <div class="mb-3">
                        <label for="duration" className="form-label">Duration</label>
                        <input type="duration" className="form-control" name="duration" placeholder="duration" onChange={this.onChange}  value={this.state.duration} />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.calculateTripCharge}>Submit</button>
                </form>
            </div>
        );
    }
}

export default calcTripCharge;