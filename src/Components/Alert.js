import React from 'react'

function Alert(Props) {
  const capitalize = (str)=>{
      return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return (
    Props.alert && <div className= {`alert alert-success`} role="alert">
        <strong>{capitalize(Props.alert.type)}</strong> : {Props.alert.msg}
    </div>
  )
}

export default Alert
