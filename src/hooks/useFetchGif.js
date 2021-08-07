import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGif = (category) => {
    const [state, setState] = useState({
        data: [], 
        isLoading: true, 
    }); 
    // console.log('hola')
    useEffect(()=> {
        // console.log('useEffect'); 
        getGifs(category).then( categories => {
            // console.log('promesa')
            setTimeout(() => {
                //se utiliza useEffect porque al cambiar el useState se recarga todo de nuevo
                setState({
                    data: categories, 
                    isLoading: false
                }); 
            }, 1500); 
        } )
        .catch(console.warn); 
    }, [category])
    // console.log('despues de la promesa'); 

    return state; 
}