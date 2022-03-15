import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom"

const AllMovies = (props)=> {

    const [movieList, setMovieList] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/movies")
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setMovieList(res.data)
            })
            .catch ((err)=>{
                console.log(err)
            })
    }, [])




    return(
        <div>
            <header>
                <h1>Movie Mania</h1>
                <Link to="/new">Add New Movie!</Link>
            </header>
            {
                movieList.map((movie, index)=>(
                    <div key={movie._id}>
                        <Link to={`/movie/${movie._id}`}><p>{movie.title}</p></Link>
                        <img src={movie.boxArt} style={{ width: "150px", height: "150px"}}/>
                    </div>
                ))
            }
        </div>
    )

}

export default AllMovies;