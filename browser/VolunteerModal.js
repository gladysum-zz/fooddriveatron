import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import {openTheVolunteerModal} from './reducer';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

// Confirmation modal appears when volunteer signs up for a food drive
class VolunteerModal extends React.Component {
  constructor() {
    super()
    this.state = {
      open: true,
    }
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({open: false});
    this.props.openTheVolunteerModal();
  }

  render() {
    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onClick={this.handleClose}
      />,
    ];

    return (
      <div>
        <Dialog
          title={`You've successfully signed up for ${this.props.fooddrive.organizername}'s food drive!`}
          actions={actions}
          modal={true}
          open={this.state.open}
        >
          <div className="question">
            The food drive will take place at the following venue:
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
            Spread the news about the food drive on social networks:
          </div>
          <div className="answer">

          </div>

        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  volunteermodal: state.volunteermodal,
  fooddrive: state.fooddrive
})

const mapDispatchToProps = dispatch => ({
  openTheVolunteerModal: () => {
    dispatch(openTheVolunteerModal())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(VolunteerModal)
