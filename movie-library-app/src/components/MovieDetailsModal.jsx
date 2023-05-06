import { Button, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react';
import React from 'react';

const MovieDetailsModal = ({ isOpen, onClose, movie }) => {
  
  return (
    <>
    {movie&&(<Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{movie.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody  width={"100%"} margin={"auto"} >
          <Image src={movie.image} alt={"movie_image"} width={"200px"} />
          <Text mb={2}>Director: {movie.director}</Text>
          <Text mb={2}>Genre: {movie.genre}</Text>
          <Text mb={2}>Release Year: {movie.year}</Text>
          <Text mb={2}>Description: {movie.synopsis}</Text>
          <Text mb={2}>Rating: {movie.ratings.map(rating=><span key={rating}>{rating} ,</span>)}</Text>
          <Text mb={2}>Cast: {movie.cast.map(cast=>(<span key={cast}>{cast} ,</span>))}</Text>
        </ModalBody>
        <Button onClick={onClose} size="sm" mt={4}>
          Close
        </Button>
      </ModalContent>
    </Modal>)}
    </>
  );
};

export default MovieDetailsModal;
