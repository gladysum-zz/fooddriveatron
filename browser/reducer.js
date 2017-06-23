import axios from 'axios'
const greetings = [
  '¡Hola! ¿Quieres hablar español conmigo?',
  '¡Hola! ¿Quieres hablar castellano conmigo?',
  '¡Hola! ¿Quieres chatear conmigo?',
  '¡Hola! ¿Quieres chatear en castellano conmigo?',
  '¡Hola! ¿Quieres chatear en español conmigo?',
  '¡Hola! ¿Qué tal?',
  '¡Hola! ¿Quieres practicar el español conmigo?',
  '¡Hola! ¿Quieres practicar el castellano conmigo?'
]

const initialState = {
  messages: [['watson', greetings[Math.floor(Math.random()*8)]]]
}

/* ------------ REDUCER ------------------ */

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD:
      if (state.messages.length > 200) return {state, messages: state.messages.slice(1).concat(action.payload)};
      return {state, messages: state.messages.concat(action.payload)};
    default:
      return state;
  }
}

/* ----------------- ACTIONS ------------------ */

const ADD = 'ADD';

/* ------------ ACTION CREATORS ------------------ */

export const addInputAction = input => ({
  type: ADD,
  payload: [['me', input]]
})

export const addResponseAction = response => ({
  type: ADD,
  payload: [['watson', response]]
})

/* ------------------ DEFAULT EXPORT ------------------ */

export default reducer;







