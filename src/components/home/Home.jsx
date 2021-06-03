import React from 'react'
import DogCard from '../dogCard/DogCard'
export default function Home() {
    const dogArray = [
        { name: "juda", type: "bulli", age: "1000" },
        { name: "kasia", type: "chiwawa", age: "2" },
        { name: "shlomo", type: "rednaus", age: "200" },
        { name: "david", type: "bulltrier", age: "3" }
    ]
    const dogsMap = dogArray.map((index, i) => {
        return (<DogCard key={i} name={index.name} type={index.type} age={index.age} />)
    });
    return (
        <div className="container">

            {dogsMap}

        </div>
    )
}