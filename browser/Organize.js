import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {openTheOrganizerModal} from './reducer';
import OrganizerModal from './OrganizerModal';

class Organize extends React.Component {
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
    .then(res=>{
      console.log(res.data);
      this.props.openTheOrganizerModal();
    })
    .catch(error=>{console.log(error)});
  }

  render() {
    return (
      <div className="background">
        <div className="organize-container">
          <div className="faqs-title">
          Organizing a Food Drive Is Easy!
          </div>
          <div className="faqs-container">

              <div className="question">
                Step 1: Find a Venu
              </div>
              <div className="answer">
                Find a venue that is able to host your food drive. Your local school, library, or church are good places to start.
              </div>
              <div className="question">
                Step 2: Find a Food Bank
              </div>
              <div className="answer">
                Find a local food bank that is able to accept your donations.
              </div>
              <div className="question">
                Step 3: Decide on a Date and Time
              </div>
              <div className="answer">
                Make sure that your venue and local food bank are both open and available that day.
              </div>
              <div className="question">
                Step 4: Enter Your Food Drive Info in the Food Drive A Tron
              </div>
              <div className="answer">
                Before filling out the Food Drive A Tron, make sure you've completed steps 1, 2, and 3! Once you submit your food drive info, the Food Drive A Tron will kick off a series of automated processes that will send messages announcing your event to all your contacts. The messages will include a link to a website where people can sign up to volunteer. The Food Drive A Tron will also send reminder messages to the volunteers.
              </div>
              <div className="question">
                Step 5: Go to Your Successfully Planned Food Drive!
              </div>
              <div className="answer">
                Show up at the venue on the day of your food drive and have a great time!
              </div>
              <hr/>
              <div className="form-title">
                Food Drive A Tron
              </div>

              {this.props.organizermodal ? <OrganizerModal/> : null}
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
      </div>
    )
  }
}

const mapStateToProps = state => ({
  organizermodal: state.organizermodal
})

const mapDispatchToProps = dispatch => ({
  openTheOrganizerModal: () => {
    dispatch(openTheOrganizerModal())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Organize)