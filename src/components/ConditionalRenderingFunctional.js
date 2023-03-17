import React from 'react'

function ConditionalRenderingFunctional(props) {
  return (
    <div>
        <p>ConditionalRenderingFunctional</p>
        <h2>{props.connected ? 'Connected' : 'Not connected'}</h2>

    </div>
  )
}

export default ConditionalRenderingFunctional