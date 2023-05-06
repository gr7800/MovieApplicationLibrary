import { Box, Button, Input, Heading, Select, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import MovieDetailsModal from './MovieDetailsModal';
import { useDispatch } from 'react-redux';
import { deleteMovies, getMovies } from '../Redux/movies/movies.action';
import MovieEditModal from './MovieEditModel';

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
    const handleDelete = (id) => {
        dispatch(deleteMovies(id));
    }
    // ........................ Movie Update Model ...............
    const [editSelectedMovie, setEditSelectedMovie] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const handleEditButtonClick = (movie) => {
        setEditSelectedMovie(movie);
        setIsEditModalOpen(true);
    };

    const handleCloseEditModal = () => {
        setEditSelectedMovie(null);
        setIsEditModalOpen(false);
    };

    // ........................ Sort by functions .......... 
    const [sortBy, setSortBy] = useState('all');

    const handleSortByChange = (e) => {
        setSortBy(e.target.value);
    };

    useEffect(() => {
        let url = "https://sore-cyan-swordfish-wear.cyclic.app/movies"
        if (sortBy !== "all") {
            url = `https://sore-cyan-swordfish-wear.cyclic.app/movies?_sort=${sortBy}&_order=asc`
            dispatch(getMovies(url))
        }
    }, [sortBy])


    // ........................ search functionality ...........
    const [searchQuery, setSearchQuery] = useState("");
    const handleSearchQueryChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchButtonClick = () => {
        // make request using searchQuery
        console.log(`Making request with search query "${searchQuery}"`);
        let url = "https://sore-cyan-swordfish-wear.cyclic.app/movies";
        if (searchQuery.length > 0) {
            url = `https://sore-cyan-swordfish-wear.cyclic.app/movies?q=${searchQuery}`;
            dispatch(getMovies(url));
        }
    };

    return (
        <>
            <Box maxW="1200px" mx="auto" px={6} py={12} bg="gray.100">
                <Box display={{ base: "block", md: "flex" }} alignItems="center" justifyContent="space-between" p={{ base: "4", md: "8" }} boxShadow={{ base: "none", md: "lg" }}>
                    <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} textAlign="center" mb={{ base: "4", md: "0" }} color="teal.500" textShadow="2px 2px #D5DBDB">
                        Movie List
                    </Heading>
                    <Box display={{ base: "block", md: "flex" }} alignItems="center" gap={{ base: "4", md: "8" }}>
                        <Select color="teal.500" textShadow="2px 2px #D5DBDB" value={sortBy} onChange={handleSortByChange} w={{ base: "full", md: "40" }}>
                            <option value="all">Sort By</option>
                            <option value="title">Title</option>
                            <option value="director">Director</option>
                            <option value="year">Year</option>
                            <option value="genre">Genre</option>
                        </Select>
                        <Box display={{ base: "block", md: "flex" }} alignItems="center" gap={{ base: "4", md: "8" }}>
                            <Input placeholder="Search" value={searchQuery} onChange={handleSearchQueryChange} />
                            <Button colorScheme="teal" onClick={handleSearchButtonClick}>Search</Button>
                        </Box>
                    </Box>
                </Box>

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
                                <Button size="sm" mr={2} onClick={() => handleEditButtonClick(el)}>
                                    Edit
                                </Button>
                                <Button size="sm" colorScheme="red" onClick={() => handleDelete(el.id)}>
                                    Delete
                                </Button>
                            </Box>
                        ))}
                    </Box>
                )}
                <MovieDetailsModal isOpen={isDetailsModalOpen} onClose={handleCloseDetailsModal} movie={selectedMovie} />
                <MovieEditModal isOpen={isEditModalOpen} onClose={handleCloseEditModal} movie={editSelectedMovie} />
            </Box>

        </>
    );
};

export default MovieList;
