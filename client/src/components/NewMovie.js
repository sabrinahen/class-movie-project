import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom"

const NewMovie = (props)=> {

    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");
    const [boxArt, setBoxArt] = useState("");
    const [watchLength, setWatchLength] = useState();
    const [rating, setRating] = useState("");
    const [actors, setActors] = useState("");
    const [kidFriendly, setKidFriendly] = useState(false);
    const [yearReleased, setYearReleased] = useState(0);

    const navigate = useNavigate();

    const submitHandler = (e)=>{
        e.preventDefault();

        axios.post("http://localhost:8000/api/movies", 
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
                <Link to="/">Return Home</Link>
            </header>

            <form onSubmit={submitHandler}>
                <div>
                    <label>Title:</label>
                    <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" />
                </div>
                <div>
                    <label>Year Released:</label>
                    <input valueasnumber={yearReleased} onChange={(e)=>setYearReleased(e.target.value)} type="number" />
                </div>
                <div>
                    <label>Genre:</label>
                    <select value={genre} name="genre" onChange={(e)=>setGenre(e.target.value)}>
                        <option defaultValue hidden></option>
                        <option value="Action">Action</option>
                    </select>
                </div>
                <div>
                    <label>Box Art:</label>
                    <input value={boxArt} onChange={(e)=>setBoxArt(e.target.value)} type="text" />
                </div>
                <div>
                    <label>Watch Length:</label>
                    <input valueasnumber={watchLength} onChange={(e)=>setWatchLength(e.target.value)} type="number" />
                </div>
                <label>Rating:</label>
                    <select value={rating} name="rating" onChange={(e)=>setRating(e.target.value)}>
                        <option defaultValue hidden></option>
                        <option value="G">G</option>
                    </select>
                <div>
                    <label>Actors:</label>
                    <input value={actors} onChange={(e)=>setActors(e.target.value)} type="text" />
                </div>
                <div>
                    <label>Kid Friendly?</label>
                    <input checked={kidFriendly} onChange={(e)=>setKidFriendly(e.target.checked)} type="checkbox" />
                </div>
                <button>Add New Movie!</button>
            </form>
        </div>
    )

}

export default NewMovie;