import { useState, useEffect } from 'react';
import axios from 'axios';
import Movies from '../components/Movie';


const Homescreen = () => {

    const [movies, setMovies] = useState([]);
    const [load, setLoad] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {

            try {
                await axios.get(`http://localhost:5000/api/movies/getallmovies`)
                    .then((response) => {
                        setMovies(response.data.movies)
                        setLoad(false)
                    });

            } catch (err) {
                setError(true)
                setLoad(false)
                console.log(err)

            }
        }
        fetchData();

    }, [])


    return (
        <>
            <div>
                <div>
                    <h1>Search bar here</h1>
                </div>

                <div>
                    <div>
                        <h2>Movies List</h2>
                    </div>
                    <div className="moviesList">

                        {(movies.map((movie, i) => {

                            return (

                                <Movies movieDetails={movie} i={i} />

                            )
                        }))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homescreen