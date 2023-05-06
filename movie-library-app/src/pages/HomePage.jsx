import React, { useEffect } from 'react'
import { Box, Heading } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux"
import { getMovies } from '../Redux/movies/movies.action'
import MovieList from '../components/MovieList'
const HomePage = () => {
    const data = useSelector(store=>store.movies.movie);
    const loading = useSelector(store=>store.movies.loading);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovies());
    }, []);

    if(loading){
        return <h1>...Loading</h1>
    }
    return (
        <Box p="6">
            <Heading as="h1" size="xl" mb="6">
                Movies Library
            </Heading>
            {/* Add more content here */}
            <MovieList data={data} />
        </Box>
    );
}

export default HomePage