import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ({category}) => {
    
   const {data:imgs, loading } = useFetchGifs(category);

    return (
        <div>
            <h3> {category} </h3>

            { loading && <p>Loading</p>}
            <ol>
                {
                    imgs.map( image =>( 
                        <li key={ image.id }> {image.title} </li>
                        ))
                }
            </ol>
        </div>
    )
}
