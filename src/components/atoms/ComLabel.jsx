import React from 'react'

function ComLabel({label, ...rest}) {
  return (
    <>
        <label {...rest}>{label}</label>
        <input {...rest} />
    </>
  )
}

export default ComLabel