import React from 'react'

function UserData(props) {
  return (
    <div>
        <p>UserData:</p>
        <h2>{props.isLoaded ? 'Data loaded!' : 'Loading...'}</h2>
    </div>
  )
}

export default UserData