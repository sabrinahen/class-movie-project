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

    const deleteMovie = (idFromBelow)=>{
        axios.delete(`http://localhost:8000/api/movies/${idFromBelow}`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setMovieList(movieList.filter(movie => movie._id !== idFromBelow))
            })
            .catch((err)=>{
                console.log(err)
            })
    }




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
                        <button onClick={()=>deleteMovie(movie._id)}>Delete</button>
                        <Link to={`/movie/edit/${movie._id}`} >Edit</Link>
                    </div>
                ))
            }
        </div>
    )

}

export default AllMovies;