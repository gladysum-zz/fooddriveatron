import React from 'react';
import {connect} from 'react-redux';
import {openTheOrganizerModal} from './reducer';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

// Confirmation modal appears when user creates a food drive
class OrganizerModal extends React.Component {
  constructor() {
    super()
    this.state = {
      open: true,
    }
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({open: false});
    this.props.openTheOrganizerModal();
    console.log("GLADYS this.props.organizermodal", this.props.organizermodal)

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
          title="Confirmation"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
          Food drive successfully created!
        </Dialog>
      </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(OrganizerModal)
