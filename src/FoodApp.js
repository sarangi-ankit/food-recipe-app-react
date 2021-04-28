// https://api.edamam.com/search?q=chicken&app_id=${}&app_key=${}
// app_id=4ebd1282
// app_key=7cfcbb3cbbee94d1e4c869fc4b1f50fc	

import React, { useEffect, useState } from 'react'
import Recipe from "./Recipe"

function FoodApp() {

    const [recipes,setRecipes]=useState([])
    const [search,setSearch]=useState('')
    const [query,setQuery]=useState('chicken')
    const app_id="4ebd1282"
    const app_key="7cfcbb3cbbee94d1e4c869fc4b1f50fc	"
    const url=`https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}`

    useEffect(()=>{
        async function fetchapi(){
            const response=await fetch(url)
            const data=await response.json()
            console.log(data.hits)
            setRecipes(data.hits)
        }
        fetchapi()
    },[query])

    const searchFood=(e)=>{
        setSearch(e.target.value)
        console.log(searchFood.value)

    }
    const addClick=(e)=>{
        e.preventDefault()
        setQuery(search)
        setSearch('')
    }
    return (
        <>
        <div className="container">
            <form onSubmit={addClick}>
                <input type="text" onChange={searchFood} value={search}/>
                <button type="submit">search</button>
            </form>
           {
               recipes.map(recipe=>(
                <Recipe 
                key={recipe.recipe.label}
                title={recipe.recipe.label}
                calorie={recipe.recipe.calories}
                image={recipe.recipe.image}
                ingredient={recipe.recipe.ingredients}

                />
               ))
           } 
        </div>
        </>
    )
}

export default FoodApp
