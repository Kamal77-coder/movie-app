import React, {useEffect, useState} from "react"
import "./movieList.css"
import { useParams } from "react-router-dom"
import Cards from "../card/card"
import { getData } from "./utils"

const MovieList = () => {
    
    const [movieList, setMovieList] = useState([])
    const {type} = useParams()

   
    useEffect(() => {
        getData(type).then((data) => {
            setMovieList(data.results)
        })
    }, [type])

   

    return movieList ?(
        <div className="movie__list">
            <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    movieList.map(movie => (
                        <Cards movie={movie} />
                    ))
                }
            </div>
        </div>
    ) : null
}

export default MovieList