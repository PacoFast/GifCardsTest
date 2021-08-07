import React, {} from "react";
import { useFetchGif } from "../hooks/useFetchGif";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
    // const [images, setImages] = useState([]);

    //componentDidMount solo se ejecuta cuando se mande a renderizar el componente
    // useEffect(() => {
    //     getGifs(category).then( setImages )
    //     .catch(console.warn)
    // }, [category]);


    const {data:images, isLoading} = useFetchGif(category); 

    // console.log(`component ${images.length}`); 

    return (
        <>
            {isLoading && <p>Cargando datos...</p>}
            <h2 className="title">{category}</h2>
            <ul className="grid">
                {images?.map( image => <GifGridItem key={image.id} {...image}/> )}
            </ul>
        </>
    );
};
