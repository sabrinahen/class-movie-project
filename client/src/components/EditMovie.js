import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom"

const EditMovie = (props)=> {

    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");
    const [boxArt, setBoxArt] = useState("");
    const [watchLength, setWatchLength] = useState();
    const [rating, setRating] = useState("");
    const [actors, setActors] = useState("");
    const [kidFriendly, setKidFriendly] = useState(false);
    const [yearReleased, setYearReleased] = useState(0);

    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/movies/${id}`)
            .then ((res)=> {
                console.log(res);
                console.log(res.data);
                setTitle(res.data.title);
                setGenre(res.data.genre);
                setBoxArt(res.data.boxArt);
                setWatchLength(res.data.watchLength);
                setRating(res.data.rating);
                setActors(res.data.actors);
                setKidFriendly(res.data.kidFriendly);
                setYearReleased(res.data.yearReleased);
            })
            .catch((err)=>{
                console.log(err)
            })
    }, [id])

    const submitHandler = (e)=>{
        e.preventDefault();

        axios.put(`http://localhost:8000/api/movies/${id}`, 
        {
            title,
            genre,
            boxArt,
            watchLength,
            rating,
            actors,
            kidFriendly,
            yearReleased
        })
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                navigate("/")
            })
            .catch ((err)=>{
                console.log(err);
            })
    }

    return(
        <div>
            <header>
                <h1>Movie Mania</h1>
                <h2>Update Movie</h2>
                <Link to="/">Return Home</Link>
            </header>

            <form onSubmit={submitHandler}>
                <div>
                    <label>Title:</label>
                    <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" />
                </div>
                <div>
                    <label>Year Released:</label>
                    <input value={yearReleased} onChange={(e)=>setYearReleased(e.target.value)} type="string" />
                </div>
                <div>
                    <label>Genre:</label>
                    <select value={genre} name="genre" onChange={(e)=>setGenre(e.target.value)}>
                        <option defaultValue hidden>Select a Genre</option>
                        <option value="Crime Noir">Crime Noir</option>
                        <option value="French Cinema">French Cinema</option>
                        <option value="Romcom">Romcom</option>
                        <option value="Horror">Horror</option>
                        <option value="Sci-Fi">Sci-Fi</option>
                        <option value="Silent Movie">Silent Movie</option>
                        <option value="Documentary">Documentary</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Action">Action</option>
                        <option value="Thriller">Thriller</option>
                        <option value="Family">Family</option>
                        <option value="Animated">Animated</option>
                        <option value="Drama">Drama</option>
                    </select>
                </div>
                <div>
                    <label>Box Art:</label>
                    <input value={boxArt} onChange={(e)=>setBoxArt(e.target.value)} type="text" />
                </div>
                <div>
                    <label>Watch Length:</label>
                    <input value={watchLength} onChange={(e)=>setWatchLength(e.target.value)} type="string" />
                </div>
                <label>Rating:</label>
                    <select value={rating} name="rating" onChange={(e)=>setRating(e.target.value)}>
                        <option defaultValue hidden>Select a Rating</option>
                        <option value="G">G</option>
                        <option value="PG">PG</option>
                        <option value="PG-13">PG-13</option>
                        <option value="R">R</option>
                        <option value="NC-17">NC-17</option>
                    </select>
                <div>
                    <label>Actors:</label>
                    <input value={actors} onChange={(e)=>setActors(e.target.value)} type="text" />
                </div>
                <div>
                    <label>Kid Friendly?</label>
                    <input checked={kidFriendly} onChange={(e)=>setKidFriendly(e.target.checked)} type="checkbox" />
                </div>
                <button>Update Movie!</button>
            </form>
        </div>
    )

}

export default EditMovie;