import { combineReducers } from 'redux'

import TimerReducer from './timerReducer'
import LapReducer from './lapReducer'

export default combineReducers({
  TimerReducer,
  LapReducer
})
