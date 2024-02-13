import express from 'express';
import { Movie } from '../models/MovieModel.js';

const router = express.Router();


router.post('/', async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.director ||
      !request.body.releaseYear
    ) {
      return response.status(400).send({
        message: 'Send all required fields: title, author, publishYear',
      });
    }
    const newMovie = {
      title: request.body.title,
      author: request.body.director,
      publishYear: request.body.releaseYear,
    };

    const movie = await Movie.create(newMovie);

    return response.status(201).send(Movie);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});


router.get('/', async (request, response) => {
  try {
    const movies = await Movie.find({});

    return response.status(200).json({
      count: movies.length,
      data: movies,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});


router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const movie = await Movie.findById(id);

    return response.status(200).json(movie);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});


router.put('/:id', async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.director ||
      !request.body.releaseYear
    ) {
      return response.status(400).send({
        message: 'Send all required fields: title, author, publishYear',
      });
    }

    const { id } = request.params;

    const result = await Movie.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: 'Movie not found' });
    }

    return response.status(200).send({ message: 'Movie updated successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});


router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Movie.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: 'Movie not found' });
    }

    return response.status(200).send({ message: 'Movie deleted successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
