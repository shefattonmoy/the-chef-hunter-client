import React from 'react';
import './RecipeCard.css';
import { Link } from 'react-router-dom';

const RecipeCard = ({ sr }) => {
    const { name, description, image_url, ingredients } = sr;
    return (
        <div className='recipe'>
            <div className='flex items-center justify-center min-h-screen container mx-auto'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
                    <div className="card bg-slate-400">
                        <div className="p-5 flex flex-col">
                            <div className="rounded-xl overflow-hidden">
                                <img src={image_url}/>
                            </div>
                            <h4 className='text-2xl md:text-lg text-white font-medium mt-3 '>{name}</h4>
                            <p className='text-sm text-white mt-3'>Description: {description}</p>
                            <p className='text-sm text-white mt-3'>Ingredients: {ingredients}</p>
                            <Link to='' className='text-center bg-blue-400 text-white-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'>View Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;