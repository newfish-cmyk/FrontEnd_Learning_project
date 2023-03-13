'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // router.get('/pokemons', controller.pokemons.index);
  // router.get('/pokemons/:id', controller.pokemons.getId);
  // router.get('/createpokemon', controller.pokemons.createPage);
  // router.post('/createpokemon', controller.pokemons.createPokemon);
  router.resources('pokemons', '/pokemons', controller.pokemons);
};
