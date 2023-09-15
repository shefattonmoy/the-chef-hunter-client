import React from 'react';
import './ChefCard.css';
import { Link } from 'react-router-dom';

const ChefCard = ({ sc }) => {
    const {chefName, chefPicture, yearsOfExperience, numberOfRecipes, likes, viewRecipesButton} = sc;
    return (
        <div className='chef'>
            <div className='flex items-center justify-center min-h-screen container mx-auto'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
                    <div className="card bg-slate-400">
                        <div className="p-5 flex flex-col">
                            <div className="rounded-xl overflow-hidden">
                                <img src={chefPicture}/>
                            </div>
                            <h4 className='text-center text-2xl md:text-lg text-white font-medium mt-3 '>{chefName}</h4>
                            <p className='text-center text-sm text-white mt-3'>Years of Experience: {yearsOfExperience}</p>
                            <p className='text-center text-sm text-white mt-3'>Number of Recipes: {numberOfRecipes}</p>
                            <Link to='/chef_recipes' className='text-center bg-blue-400 text-white-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'>View Recipes</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;