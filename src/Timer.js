import Button from './component/Button'
import Label from './component/Label'

import { connect } from 'react-redux'

const display = (h, m, s) => {
  h < 10 && (h = '0' + h)
  m < 10 && (m = '0' + m)
  s < 10 && (s = '0' + s)
  return <h1>{h} : {m} : {s}</h1>
}

const Timer = ({ timer, incTimer, decTimer, setLap }) => {
  // const [timer, setTimer] = useState({ time: { h: 0, m: 1, s: 30 }, laps: [] })

  const [h, m, s] = [timer.time.h, timer.time.m, timer.time.s]

  // const incTimer = () => {
  //   setTimer(Object.assign({}, timer, timer.time.s++));
  //   (timer.time.s === 60) && setTimer(Object.assign({}, timer, timer.time.s = 0, timer.time.m++));
  //   (timer.time.m === 60) && setTimer(Object.assign({}, timer, timer.time.m = 0, timer.time.h++))
  // }

  // const decTimer = () => {
  //   setTimer(Object.assign({}, timer, timer.time.s--));
  //   (timer.time.s < 0 && timer.time.m === 0 && timer.time.h === 0) && setTimer(Object.assign({}, timer, timer.time.s = 0));
  //   (timer.time.s < 0) && setTimer(Object.assign({}, timer, timer.time.s = 59, timer.time.m--))
  // }

  // const resetTimer = () => {
  //   setTimer(Object.assign({}, timer, timer.time.s = 0, timer.time.m = 0, timer.time.h = 0))
  // }

  return (
    <div>
      {display(h, m, s)}
      <Button clicked={incTimer} name='Increment' />
      <Button clicked={() => setLap({ h, m, s })} name='Lap' />
      <Button name='Reset' />
      <Button clicked={decTimer} name='Decrement' />
      <Label laps = {} />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    timer: state.TimerReducer,
    lap: state.lapReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    incTimer: () => dispatch({ type: 'INCREMENT' }),
    decTimer: () => dispatch({ type: 'DECREMENT' }),
    setLap: (data) => dispatch({ type: 'LAPPING', payload: data })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer)
