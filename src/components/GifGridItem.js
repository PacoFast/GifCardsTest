import React from 'react'

export const GifGridItem = ({title, imageUrl}) => {
    return (
        <li className="grid-item">
            <h3>{title}</h3>
            <img src={imageUrl} alt={title + "imagen gif"} />
        </li>
    )
}
