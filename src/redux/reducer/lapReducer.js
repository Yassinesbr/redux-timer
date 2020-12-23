
const LapReducer = (state = [], action) => {
  switch (action.type) {
    case 'LAPPING':
      return [...state, action.payload]
    case 'CLEAR':
      return []
    default:
      return state
  }
}
export default LapReducer
