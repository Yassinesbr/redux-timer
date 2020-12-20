const initialState = { time: { h: 0, m: 1, s: 22 } }

const TimerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({}, state, state.time.s++)

    case 'DECREMENT':
      return Object.assign({}, state, state.time.s--)

    case 'RESET':
    {
      const stateReset = Object.assign({}, state, state.time.s = 0, state.time.h = 0, state.time.m = 0)
      return stateReset
    }
    default:

      return state
  }
}
export default TimerReducer
