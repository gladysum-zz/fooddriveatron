import React from 'react';
import axios from 'axios';

export default class Organize extends React.Component {
  constructor() {
    super();
    this.state = {
      fooddrivename: '',
      organizername: '',
      organizeremail: '',
      month:'',
      date: '',
      year:'',
      venue:'',
      streetaddress:'',
      town:'',
      state:'',
      zipcode:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let input = this.state;

    // Clear the user input field upon submit
    this.setState({
      fooddrivename: '',
      organizername: '',
      organizeremail: '',
      month:'',
      date: '',
      year:'',
      venue:'',
      streetaddress:'',
      town:'',
      state:'',
      zipcode:''
    });

    // Update the redux store with user's input
    //this.props.addInput(input)

    // Send input to database; get response with new fooddrive information
    axios.post('/fooddrives', {input: input})
    .then(res=>{console.log(res.data)})
    .catch(error=>{console.log(error)});
  }

  render() {
    return (
      <div className="background">
        <div className="organize-container">
          <form onSubmit={this.handleSubmit}>

            <label>
              Name of food drive:
              <input
                name="fooddrivename"
                type="text"
                value={this.state.fooddrivename}
                onChange={this.handleChange} />
            </label>
            <br/>

            <label>
              Your name:
              <input
                name="organizername"
                type="text"
                value={this.state.organizername}
                onChange={this.handleChange} />
            </label>
            <br/>

            <label>
              Your email:
              <input
                name="organizeremail"
                type="text"
                value={this.state.organizeremail}
                onChange={this.handleChange} />
            </label>
            <br/>

            <label>
              Month:
              <input
                name="month"
                type="text"
                value={this.state.month}
                onChange={this.handleChange} />
            </label>
            <br/>

            <label>
              Date:
              <input
                name="date"
                type="text"
                value={this.state.date}
                onChange={this.handleChange} />
            </label>
            <br/>

            <label>
              Year:
              <input
                name="year"
                type="text"
                value={this.state.year}
                onChange={this.handleChange} />
            </label>
            <br/>

            <label>
              Venue:
              <input
                name="venue"
                type="text"
                value={this.state.venue}
                onChange={this.handleChange} />
            </label>
            <br/>

            <label>
              streetaddress:
              <input
                name="streetaddress"
                type="text"
                value={this.state.streetaddress}
                onChange={this.handleChange} />
            </label>
            <br/>

            <label>
              town:
              <input
                name="town"
                type="text"
                value={this.state.town}
                onChange={this.handleChange} />
            </label>
            <br/>

            <label>
              state:
              <input
                name="state"
                type="text"
                value={this.state.state}
                onChange={this.handleChange} />
            </label>
            <br/>

            <label>
              zipcode:
              <input
                name="zipcode"
                type="text"
                value={this.state.zipcode}
                onChange={this.handleChange} />
            </label>
            <br/>

            <br/>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    )
  }
}