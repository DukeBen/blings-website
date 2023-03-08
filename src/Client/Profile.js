import React from 'react'
import  "./Styles.css"
import {getAge} from "../Utils/SearchData";

const displayNumber = (number) => {
  return number.replace(/\D/g, '');
}

export default function Profile(props) {
  let age = getAge(props.birth);
  let phoneNumber = displayNumber(props.number);
  return (

    <div className="container">
        <img className="user-avatar" src= {require("../../public/images/"+props.source)}/>

        <div className="sub-container">
            <div className="label">
                {props.name + ", " + age + ", " + phoneNumber}
            </div>

            <p className="description">
                {props.address}
            </p>
        </div>
    </div>
  )
}




