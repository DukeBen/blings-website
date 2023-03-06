import React from 'react'
import  "./Styles.css"
import {getAge} from "../Utils/SearchData";


export default function Profile(props) {
  let age = getAge(props.birth);
  return (

    <div class="container">
        <img class="user-avatar" src= {window.location.origin + '/images/'+props.source}/>

        <div class="sub-container">
            <div class="label">
                {props.name}
            </div>

            <p class="description">
                {age}
            </p>
        </div>
    </div>
  )
}




