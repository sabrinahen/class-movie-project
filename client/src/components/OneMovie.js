import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom"

const OneMovie = (props)=> {

const [movie, setMovie] = useState({});

    const {id} = useParams();

    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/movies/${id}`)
            .then ((res)=> {
                console.log(res);
                console.log(res.data);
                setMovie(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    }, [id])

    const deleteOneMovie = ()=>{
        axios.delete(`http://localhost:8000/api/movies/${id}`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                navigate("/")
            })
            .catch((err)=>{
                console.log(err)
            })
    }


    return(
        <div>
            <header>
                <h1>Movie Mania</h1>
                <h3>{movie.title}</h3>
                <Link to="/">Return Home!</Link>
            </header>
            <p>{movie.genre}</p>
            <img src={movie.boxArt} style={{ width: "200px", height: "200px"}}/>
            <p>{movie.watchLength}</p>
            <p>{movie.rating}</p>
            <p>{movie.actors}</p>
            <div>Kid Friendly
                {
                    movie.kidFriendly?
                    <p>Your Kids Can Watch This</p>
                    :<p>This will Scar Your Kids For Life</p>
                }
            <button onClick={deleteOneMovie}>Delete</button>
            </div>
        </div>
    )

}

export default OneMovie;