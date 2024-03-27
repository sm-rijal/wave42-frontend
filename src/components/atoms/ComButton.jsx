import React from 'react'

function ComButton(props) {
  return (
    <>
        <button onClick={props.handleClick}>{props.title}</button>
    </>
  )
}

export default ComButton