import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import RecipeCard from '../RecipeCard/RecipeCard';
import './Recipe.css';

const Recipe = () => {
    const [recipe, setRecipe] = useState([])
    const { id } = useParams();
    const singleRecipe = useLoaderData();

    fetch('https://localhost:5173/recipes')
        .then((response) => response.json())
        .then(data => setRecipe(data));

    console.log(recipe);

    return (
        <div className='recipe-container-parent'>
            <div className='recipe-container'>
            {
                recipe.map(sr => <RecipeCard
                    key={sr.id}
                    sr={sr}
                ></RecipeCard>)
            }
            </div>
        </div>

    );

};

export default Recipe;