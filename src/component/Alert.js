import React from 'react'

export default function Alert (props) {
  return (
    
       props.alertp && <div className={`alert text-center alert-${props.alertp.type} alert-dismissible fade show`} role="alert">
  <strong>{props.alertp.msg}</strong>
  
        </div>
    
  )
}
