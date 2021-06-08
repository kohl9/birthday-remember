import React from 'react'

import './person.css'

export default function Person(props) {
    return (
        <div className="person">
            <div className="avatar"><img src={props.avatar} /></div>
            <div>
                <h4>{props.name}</h4>
                <span>{props.age} years</span>
            </div>
        </div>
    )
}