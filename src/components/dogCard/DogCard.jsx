import React from 'react'

export default function DogCard(props) {
    return (
        <div className="cards"
            style={props.age < 4 ? { background: "yellow" } : { background: "green" }}>
            <h2>Name : {props.name}</h2>
            <h3>Type: {props.type}</h3>
            <h4>Age: {props.age}</h4>
        </div>
    )
}