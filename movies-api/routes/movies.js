const express = require('express');
const MoviesService = require('../services/movies');

function moviesApi(app) {
  const router = express.Router();
  app.use('/api/movies', router);

  const moviesService = new MoviesService();

  /**
   * Route GET para obtner toda la lista de peliculas
   */
  router.get('/', async function(req, res, next) {

    const { tags } = req.query; // se concantena con ?

    try {
      const movies = await moviesService.getMovies({ tags }); 

      res.status(200).json({
        data: movies,
        message: 'movies listed'
      });
    } catch (error) {
      next(error);
    }
  });

  /**
   * Route GET para obtener una sola pelicula por ID
   */
  router.get('/:movieId', async function(req, res, next) {

      const { movieId } = req.params; // en la url

      try {
          const movies = await moviesService.getMovie({ movieId });

          res.status(200).json({
              data: movies,
              message: 'movie retrieved'
          });
      } catch (error) {
          next(error);
      }
  });

  /**
   * Route POST para crear una nueva pelicula pasandole un json en el request
   */
  router.post('/', async function(req, res, next) {

      const { body: movie } = req;

      try {
          const createdMovieId = await moviesService.createMovie({ movie });

          res.status(201).json({
              data: createdMovieId,
              message: 'movie created'
          });
      } catch (error) {
          next(error);
      }
  });

  /**
   * Route PUT para modificar una pelicula pasandole la id
   */
  router.put('/:movieId', async function(req, res, next) {

      const { movieId } = req.params; // en la url
      const { body: movie } = req;

      try {
          const updatedMovieId = await moviesService.updateMovie({ movieId, movie });

          res.status(200).json({
              data: updatedMovieId,
              message: 'movie updated'
          });
      } catch (error) {
          next(error);
      }
  });

  /**
   * Route DELETE para eliminar una peliculando pasandole un ID
   */
  router.delete('/:movieId', async function(req, res, next) {

      const { movieId } = req.params; // en la url

      try {
          const deletedMovieId = await moviesService.deletedMovie({ movieId });

          res.status(200).json({
              data: deletedMovieId,
              message: 'movie deleted'
          });
      } catch (error) {
          next(error);
      }
  });
}

module.exports = moviesApi;