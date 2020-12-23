import React from 'react'

const display = (h, m, s) => {
  h < 10 && (h = '0' + h)
  m < 10 && (m = '0' + m)
  s < 10 && (s = '0' + s)
  return <p>{h} : {m} : {s}</p>
}
export default function Label ({ laps }) {
  return (
    <div>
      {laps.map(element => {
        return (
          <p key>{display(element.h, element.m, element.s)}</p>
        )
      })}
    </div>
  )
}
