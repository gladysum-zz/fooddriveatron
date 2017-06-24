const initialState = {
  organizermodal: false,
  volunteermodal: false
}

/* ------------ REDUCER ------------------ */

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ORGANIZER_MODAL_OPEN:
      return Object.assign({}, state, {
        organizermodal: !state.organizermodal
      })

    case VOLUNTEER_MODAL_OPEN:
      return Object.assign({}, state, {
        volunteermodal: !state.volunteermodal
      })

    default:
      return state;
  }
}

/* ----------------- ACTIONS ------------------ */

const ORGANIZER_MODAL_OPEN = 'ORGANIZER_MODAL_OPEN';
const VOLUNTEER_MODAL_OPEN = 'VOLUNTEER_MODAL_OPEN';


/* ------------ ACTION CREATORS ------------------ */

export const openTheOrganizerModal = () => ({
  type: ORGANIZER_MODAL_OPEN
})

export const VolunteerModalOpenAction = () => ({
  type: VOLUNTEER_MODAL_OPEN
})

/* ------------------ DEFAULT EXPORT ------------------ */

export default reducer;







