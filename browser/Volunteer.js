import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {openTheVolunteerModal, updateFoodDrive} from './reducer';
import VolunteerModal from './VolunteerModal';

class Volunteer extends React.Component {
  constructor() {
    super();
    this.state = {
      volunteerphone: '(212)123-4567',
      volunteername: 'Lee Wilson',
      volunteeremail: 'leewilson@gmail.com',
      timeslot1: false,
      timeslot2: true,
      timeslot3: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }

  handleSubmit(event) {
    event.preventDefault();
    // let input = {};
    // if (this.state.timeslot1) {
    //   input['volunteers1'] = this.state.volunteername;
    // }
    // if (this.state.timeslot2) {
    //   input['volunteers2'] = this.state.volunteername;
    // }
    // if (this.state.timeslot3) {
    //   input['volunteers3'] = this.state.volunteername;
    // }

    // The form is pre-populated and the following code is commented out for demo purposes
    // Clear the user input field upon submit
    // this.setState({
    //   volunteerphone: '',
    //   volunteername: '',
    //   volunteeremail: '',
    //   timeslot1: false,
    //   timeslot2: false,
    //   timeslot3: false
    // });

    // Show the volunteer confirmation modal
    this.props.openTheVolunteerModal();

    // Send input to database; get response with new fooddrive information
    // axios.put(`/fooddrives/${this.props.fooddrive.id}`, {input: input})
    // .then(res=>{
    //   console.log(res.data);
    //   this.props.openTheVolunteerModal();
    // })
    // .catch(error=>{console.log(error)});
  }

  componentWillMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="background">
        <div className="organize-container">
          <div className="faqs-title">
          {`Sign Up to Volunteer at ${this.props.fooddrive.organizername}'s Food Drive`}
          </div>
          <div className="faqs-container">

              <div className="question">
                The food drive will take place at the following location:
              </div>
              <div className="answer">
                {this.props.fooddrive.venue + ', ' + this.props.fooddrive.streetaddress + ', ' + this.props.fooddrive.townstatezip}
              </div>

              <div className="question">
                The food drive will take place at the following date/time:
              </div>
              <div className="answer">
                {this.props.fooddrive.monthdayyear + ', ' + this.props.fooddrive.starttime + ' to ' + this.props.fooddrive.endtime}
              </div>

              <div className="question">
                Spread the word about the food drive on social networks:
              </div>

              <div className="socialmedia">
                <img src="./images/gmail.png" style={{width: "60px", height: "40px", paddingRight: "30px"}}/>
                <img src="./images/fb.png" style={{width: "43px", height: "40px", paddingRight: "30px"}}/>
                <img src="./images/tw.png" style={{width: "40px", height: "40px", paddingRight: "30px"}}/>
                <img src="./images/ig.png" style={{width: "40px", height: "40px", paddingRight: "30px"}}/>
                <img src="./images/snap.png" style={{width: "40px", height: "40px", paddingRight: "30px"}}/>
                <img src="./images/in.png" style={{width: "46px", height: "40px", paddingRight: "30px"}}/>
                <img src="./images/twilio.png" style={{width: "40px", height: "40px", paddingRight: "30px"}}/>

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
                      name="volunteername"
                      type="text"
                      value={this.state.volunteername}
                      onChange={this.handleChange} />
                  </label>
                  <br/>

                  <label>
                    Your email:
                    <input
                      name="volunteeremail"
                      type="text"
                      value={this.state.volunteeremail}
                      onChange={this.handleChange} />
                  </label>
                  <br/>

                  <label>
                    Your phone number:
                    <input
                      name="volunteerphone"
                      type="text"
                      value={this.state.volunteerphone}
                      onChange={this.handleChange} />
                  </label>
                </div>

                <div className="input-col-middle-checkboxes">

                  <h1>Choose your time slot(s):</h1>

                  <label>
                    10AM to 12PM:
                    <input
                      name="timeslot1"
                      type="checkbox"
                      checked={this.state.timeslot1}
                      onChange={this.handleChange} />
                  </label>
                  <br />

                  <label>
                    12PM to 2PM:
                    <input
                      name="timeslot2"
                      type="checkbox"
                      checked={this.state.timeslot2}
                      onChange={this.handleChange} />
                  </label>
                  <br />

                  <label>
                    2PM to 4PM:
                    <input
                      name="timeslot3"
                      type="checkbox"
                      checked={this.state.timeslot3}
                      onChange={this.handleChange} />
                  </label>
                  <br />

                </div>

                <div className="input-col-right">
                </div>
                </div>
                </div>
                <div id="button-container">
                  <input type="submit" value="Submit" id="button"/>
                </div>
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