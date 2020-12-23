import React from 'react'

export default function Button({ name, clicked }) {
  return (

    <button onClick={clicked} style={{ margin: 5, borderColor: 'gray' }}>
      {name}
    </button>

  )
}
