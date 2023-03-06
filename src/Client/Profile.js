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

    <div class="container">
        <img class="user-avatar" src= {window.location.origin + '/images/'+props.source}/>

        <div class="sub-container">
            <div class="label">
                {props.name + ", " + age + ", " + phoneNumber}
            </div>

            <p class="description">
                {props.address}
            </p>
        </div>
    </div>
  )
}




