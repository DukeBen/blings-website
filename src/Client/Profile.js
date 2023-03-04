import React from 'react'
import  "./Styles.css"

export default function Profile(props) {
  return (

    <div class="container">
        <img class="user-avatar" src= {props.source}/>

        <div class="sub-container">
            <div class="label">
                {props.label}
            </div>

            <p class="description">
                {props.description}
            </p>
        </div>
    </div>
  )
}




