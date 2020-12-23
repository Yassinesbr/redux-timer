const initialState = { time: { h: 0, m: 0, s: 0 } }

const TimerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
    {
      let stateInc = Object.assign({}, state, state.time.s++);
      (state.time.s === 60) && (stateInc = Object.assign({}, state, state.time.s = 0, state.time.m++));
      (state.time.m === 60) && (stateInc = Object.assign({}, state, state.time.m = 0, state.time.h++))
      return stateInc
    }

    case 'DECREMENT':
    {
      let stateDec = Object.assign({}, state, state.time.s--);
      (state.time.s < 0 && state.time.m === 0 && state.time.h === 0) && (stateDec = Object.assign({}, state, state.time.s = 0));
      (state.time.m === 0 && state.time.s < 0) && (stateDec = Object.assign({}, state, state.time.m = 59, state.time.s = 59, state.time.h--));
      (state.time.s < 0) && (stateDec = Object.assign({}, state, state.time.s = 59, state.time.m--))
      return stateDec
    }
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
