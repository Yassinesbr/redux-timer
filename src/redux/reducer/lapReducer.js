const initialState = [1]

const lapReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LAPPING':
      return [...state, state + 1]

    default:
      return state
  }
}
export default lapReducer
