




















const lapReducer = (state = [], action) => {
  switch (action.type) {
    case 'LAPPING':
      return [...state, action.payload]

    default:
      return state
  }
}
export default lapReducer
