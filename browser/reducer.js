const initialState = {
  organizermodal: false,
  volunteermodal: false,
  fooddrive: {}
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

    case FOODDRIVE:
      return Object.assign({}, state, {
        fooddrive: action.payload
      })

    default:
      return state;
  }
}

/* ----------------- ACTIONS ------------------ */

const ORGANIZER_MODAL_OPEN = 'ORGANIZER_MODAL_OPEN';
const VOLUNTEER_MODAL_OPEN = 'VOLUNTEER_MODAL_OPEN';
const FOODDRIVE = 'FOODDRIVE';


/* ------------ ACTION CREATORS ------------------ */

export const openTheOrganizerModal = () => ({
  type: ORGANIZER_MODAL_OPEN
})

export const openTheVolunteerModal = () => ({
  type: VOLUNTEER_MODAL_OPEN
})

export const updateFoodDrive = input => ({
  type: FOODDRIVE,
  payload: input
})

/* ------------------ DEFAULT EXPORT ------------------ */

export default reducer;







