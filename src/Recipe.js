import React from 'react'

function Recipe({title,calorie,image,ingredient}) {
    return (
        <>
        <h1>{title}</h1>
        <ol>
            {ingredient.map(ingredient=>(
                <li>{ingredient.text}</li>
            ))}
        </ol>
        <p>{calorie}</p>
        <img src={image} alt="img.png" />
        </>
    )
}

export default Recipe
