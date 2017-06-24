import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {openTheVolunteerModal, updateFoodDrive} from './reducer';
import VolunteerModal from './VolunteerModal';

class Volunteer extends React.Component {
  constructor() {
    super();
    this.state = {
      organizerphone: '',
      organizername: '',
      organizeremail: '',
      monthdayyear:'',
      starttime: '',
      endtime:'',
      venue:'',
      streetaddress:'',
      townstatezip:''
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
      organizerphone: '',
      organizername: '',
      organizeremail: '',
      monthdayyear:'',
      starttime: '',
      endtime:'',
      venue:'',
      streetaddress:'',
      townstatezip:''
    });

    // Update the redux store with user's input
    //this.props.addInput(input)

    // Send input to database; get response with new fooddrive information
    axios.post('/fooddrives', {input: input})
    .then(res=>{
      console.log(res.data);
      this.props.updateFoodDrive(res.data);
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
                Step 1: Find a Venue
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
                Step 4: Enter Your Food Drive Info in the <i>FoodDriveATron</i>
              </div>
              <div className="answer">
                Before filling out the <i>FoodDriveATron</i>, make sure you've completed steps 1, 2, and 3! Once you submit your food drive info, the <i>FoodDriveATron</i> will kick off a series of automated processes that will send messages announcing your event to all your contacts. The messages will include a link to a website where people can sign up to volunteer. The <i>FoodDriveATron</i> will also send reminder messages to the volunteers.
              </div>
              <div className="question">
                Step 5: Go to Your Successfully Planned Food Drive!
              </div>
              <div className="answer">
                Show up at the venue on the day of your food drive and have a great time!
              </div>
              <hr/>
              <div className="form-title">
                <i>FoodDriveATron</i>
              </div>

              {this.props.volunteermodal ? <VolunteerModal fooddrive={this.props.fooddrive}/> : null}

              <form onSubmit={this.handleSubmit}>

                <div className="input-form">
                <div id="stylized">

                <div className="input-col-left">
                  <h1>Your contact info</h1>

                  <label>
                    Your full name:
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
                    Your phone number:
                    <input
                      name="organizerphone"
                      type="text"
                      value={this.state.organizerphone}
                      onChange={this.handleChange} />
                  </label>
                </div>

                <div className="input-col-middle">
                  <h1>When is your food drive?</h1>
                  <label>
                    Month, day, year:
                    <input
                      name="monthdayyear"
                      type="text"
                      value={this.state.monthdayyear}
                      onChange={this.handleChange} />
                  </label>
                  <br/>

                  <label>
                    Start time:
                    <input
                      name="starttime"
                      type="text"
                      value={this.state.starttime}
                      onChange={this.handleChange} />
                  </label>
                  <br/>

                  <label>
                    End time:
                    <input
                      name="endtime"
                      type="text"
                      value={this.state.endtime}
                      onChange={this.handleChange} />
                  </label>
                </div>

                <div className="input-col-right">
                  <h1>Where is your food drive?</h1>
                  <label>
                    Name of venue:
                    <input
                      name="venue"
                      type="text"
                      value={this.state.venue}
                      onChange={this.handleChange} />
                  </label>
                  <br/>

                  <label>
                    Venue street address:
                    <input
                      name="streetaddress"
                      type="text"
                      value={this.state.streetaddress}
                      onChange={this.handleChange} />
                  </label>
                  <br/>

                  <label>
                    Venue town, state, zipcode:
                    <input
                      name="townstatezip"
                      type="text"
                      value={this.state.townstatezip}
                      onChange={this.handleChange} />
                  </label>
                </div>
                </div>
                </div>
                <input type="submit" value="Submit" id="button"/>
              </form>

          </div>



        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  volunteermodal: state.volunteermodal,
  fooddrive: state.fooddrive
})

const mapDispatchToProps = dispatch => ({
  openTheVolunteerModal: () => {
    dispatch(openTheVolunteerModal())
  },
  updateFoodDrive: input => {
    dispatch(updateFoodDrive(input))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Volunteer)