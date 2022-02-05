import React,{useState} from 'react'
import { AddCategory } from './Component/AddCategory';
import { GifGrid } from './Component/GifGrid';

export const GifExpertApp = () => {

    
    const [categories, setCategories] = useState(['']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr></hr>

            <ol>
                { 
                    categories.map( category => {
                       return <GifGrid 
                                key = {category}
                                category={ category }/>;})
                }
            </ol>
        </>
    )
}
