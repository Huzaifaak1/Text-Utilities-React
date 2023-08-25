import React from 'react';

export default function Alert(props){
let capitalized = ()=>{
    let lower = props.alert.type.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
}

   return (

    props.alert && <div className={`alert alert-${props.alert.type === 'error'? 'danger' : 'success'} alert-dismissible fade show`} role="alert">
    <strong>{capitalized(props.alert.type)} </strong> : {props.alert.msg}
    </div>

    )
}