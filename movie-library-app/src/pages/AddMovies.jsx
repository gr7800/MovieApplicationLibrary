import { useState } from "react";
import {
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Select,
    Stack,
    Button,
    Box,
    Heading,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { getMovies, postMovies } from "../Redux/movies/movies.action";


const AddMovies = () => {
    const [movieData, setMovieData] = useState({
        id: 0,
        title: "",
        director: "",
        year: 0,
        genre: "",
        synopsis: "",
        cast: [],
        ratings: [],
        image: "",
    });

    const dispatch = useDispatch();

    function handleSubmit(event) {
        event.preventDefault();
        // Do something with the movieData object, like sending it to an API endpoint
        if (movieData.title.length > 0 && movieData.director.length > 0 && movieData.year.length > 0 && movieData.ratings.length > 0) {
            console.log(movieData);
            movieData.id = Date.now();
            postMovies(movieData);
            alert("Data Added Succesfully")
            dispatch(getMovies());
        } else {
            alert("Please fill all the details first")
        }

    }
    return (
        <Box
            maxW="xl"
            mx="auto"
            p={6}
            bg="white"
            boxShadow="xl"
            rounded="md"
            overflow="hidden"
            mt={5}
        >
            <Heading >Add Movie</Heading>
            <form onSubmit={handleSubmit}>
                <Stack spacing={6}>
                    <FormControl id="title" isRequired>
                        <FormLabel>Title</FormLabel>
                        <Input
                            placeholder="Enter the movie title"
                            value={movieData.title}
                            onChange={(event) =>
                                setMovieData({ ...movieData, title: event.target.value })
                            }
                        />
                    </FormControl>
                    <FormControl id="director" isRequired>
                        <FormLabel>Director</FormLabel>
                        <Input
                            placeholder="Enter the director's name"
                            value={movieData.director}
                            onChange={(event) =>
                                setMovieData({ ...movieData, director: event.target.value })
                            }
                        />
                    </FormControl>
                    <FormControl id="year" isRequired>
                        <FormLabel>Year</FormLabel>
                        <Input
                            type="number"
                            placeholder="Enter the release year"
                            value={movieData.year}
                            onChange={(event) =>
                                setMovieData({ ...movieData, year: event.target.value })
                            }
                        />
                    </FormControl>
                    <FormControl id="genre" isRequired>
                        <FormLabel>Genre</FormLabel>
                        <Select
                            placeholder="Select a genre"
                            value={movieData.genre}
                            onChange={(event) =>
                                setMovieData({ ...movieData, genre: event.target.value })
                            }
                        >
                            <option value="Drama">Drama</option>
                            <option value="Comedy">Comedy</option>
                            <option value="Action">Action</option>
                            <option value="Thriller">Thriller</option>
                            <option value="Horror">Horror</option>
                            <option value="Sci-fi">Sci-fi</option>
                        </Select>
                    </FormControl>
                    <FormControl id="synopsis" isRequired>
                        <FormLabel>Synopsis</FormLabel>
                        <Textarea
                            placeholder="Enter a brief synopsis"
                            value={movieData.synopsis}
                            onChange={(event) =>
                                setMovieData({ ...movieData, synopsis: event.target.value })
                            }
                        />
                    </FormControl>
                    <FormControl id="cast" isRequired>
                        <FormLabel>Cast</FormLabel>
                        <Input
                            placeholder="Enter the cast members (separated by commas)"
                            value={movieData.cast}
                            onChange={(event) =>
                                setMovieData({
                                    ...movieData,
                                    cast: event.target.value.split(","),
                                })
                            }
                        />
                    </FormControl>
                    <FormControl id="ratings">
                        <FormLabel>Ratings</FormLabel>
                        <Input
                            placeholder="Enter the ratings (separated by commas)"
                            value={movieData.ratings}
                            onChange={(event) =>
                                setMovieData({
                                    ...movieData,
                                    ratings: event.target.value.split(",").map(String)
                                })
                            }
                        />
                    </FormControl>
                    <FormControl id="image" isRequired>
                        <FormLabel>Image URL</FormLabel>
                        <Input
                            placeholder="Enter the image URL"
                            value={movieData.image}
                            onChange={(event) =>
                                setMovieData({ ...movieData, image: event.target.value })
                            }
                        />
                    </FormControl>
                    <Button type="submit" colorScheme="blue">
                        Add Movie
                    </Button>
                </Stack>
            </form>
        </Box>

    )
}

export default AddMovies