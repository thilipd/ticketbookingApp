import '../App.css';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Button, Box } from '@mui/material';


const Bookingscreen = () => {

    let movieId = useParams()


    const [movie, setMovie] = useState()

    useEffect(() => {

        const fetchData = async () => {
            try {
                await axios.post(`http://localhost:5000/api/movies/getmoviebyid`, { movieId: movieId.id })
                    .then((response) => {

                        setMovie(response.data.movie)

                    });

            } catch (err) {

                console.log(err)
            }
        }
        fetchData()


    }, [])

    let len = 2;



    return (
        <>
            {(movie) ?
                <>
                    <div>
                        <h2>{movie[0].movieName}</h2>
                        <Box className='bookingContainer'>
                            <img src={movie[0].imageUrl[2]} alt="movie image" className='bookingImg' />


                            <div className='bookingDetails'>
                                <h3>{movie[0].movieName}</h3>
                                <ul className="movieGenere">
                                    {movie[0].movieGener.map((gener, i) =>

                                        (i !== len) ?
                                            <li >{gener} /</li> :
                                            <li >{gener}</li>

                                    )}

                                </ul>
                                <h4>Ratings: {movie[0].rating}</h4>
                                <p>{movie[0].aboutMovie}</p>
                                <div className='bookingBtn'>
                                    <div >
                                        <Button variant="contained">Book Tickets</Button>
                                    </div>
                                </div>
                            </div>

                        </Box>
                    </div>
                </> :
                <></>
            }


        </>
    )
}

export default Bookingscreen;