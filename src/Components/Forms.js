import React, { Component } from 'react'

function Forms(props){
    return(
    <div><p>{props.item.firstName}</p>
    <p>{props.item.lastName}</p>
    <p>{props.item.employerid}</p>
    <p>{props.item.gender}</p></div>
    )}
    
    export default Forms