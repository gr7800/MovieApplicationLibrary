import { Box, Button, Heading, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import MovieDetailsModal from './MovieDetailsModal';
import { useDispatch } from 'react-redux';
import { deleteMovies } from '../Redux/movies/movies.action';

const MovieList = ({ data }) => {
    console.log(data);
    const dispatch = useDispatch();
    //   ..............Show movie details........ 
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

    const handleDetailsButtonClick = (movie) => {
        setSelectedMovie(movie);
        setIsDetailsModalOpen(true);
    };

    const handleCloseDetailsModal = () => {
        setSelectedMovie(null);
        setIsDetailsModalOpen(false);
    };

    // .....................Delete a Movie ......... 
    const handleDelete = (id)=>{
        dispatch(deleteMovies(id));
    }

    return (
        <>
            <Box maxW="1200px" mx="auto" px={6} py={12} bg="gray.100">
                <Heading as="h2" fontSize={{ base: '2xl', md: '3xl' }} textAlign="center" mb={8} color="teal.500" textShadow="2px 2px #D5DBDB">
                    Movie List
                </Heading>
                {data && data.length > 0 && (
                    <Box
                        display="grid"
                        gridTemplateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
                        gridGap={{ base: 4, md: 6 }}
                    >
                        {data.map((el) => (
                            <Box key={el.id} boxShadow="md" p={6} bg="white">
                                <Heading fontSize={{ base: 'xl', md: '2xl' }} mb={4}>
                                    {el.title}
                                </Heading>
                                <Text fontSize={{ base: 'sm', md: 'md' }} mb={2}>
                                    Director: {el.director}
                                </Text>
                                <Text fontSize={{ base: 'sm', md: 'md' }} mb={4}>
                                    Genre: {el.genre}
                                </Text>
                                <Button size="sm" mr={2} onClick={() => handleDetailsButtonClick(el)}>
                                    Details
                                </Button>
                                <Button size="sm" mr={2}>
                                    Edit
                                </Button>
                                <Button size="sm" colorScheme="red" onClick={()=>handleDelete(el.id)}>
                                    Delete
                                </Button>
                            </Box>
                        ))}
                    </Box>
                )}
                <MovieDetailsModal isOpen={isDetailsModalOpen} onClose={handleCloseDetailsModal} movie={selectedMovie} />
            </Box>

        </>
    );
};

export default MovieList;
