const { Controller } = require('egg');
const pokemonList = [
  '皮卡丘',
  '小火龙',
  '杰尼龟',
  '妙蛙种子',
];

class PokemonsController extends Controller {

  async index() {
    this.ctx.body = pokemonList;
  }

  async new() {
    this.ctx.body = `
          <form method='post' action='/pokemons'>
              <input name='pokemonName'>
              <button>add</button>
          </form>
      `;
  }

  async create() {
    const pokemon = this.ctx.request.body;
    pokemonList.push(pokemon.pokemonName);
    // this.ctx.body = 'success';
    this.ctx.redirect('/pokemons');
  }

  //   async getId() {
  //     const id = this.ctx.params.id;
  //     this.ctx.body = `id:${id}`;
  //   }

  //   async createPage() {
  //     this.ctx.body = `
  //         <form method='post' action='/createpokemon'>
  //             <input name='pokemonName'>
  //             <button>add</button>
  //         </form>
  //     `;
  //   }

//   async createPokemon() {
//     const pokemon = this.ctx.request.body;
//     pokemonList.push(pokemon.pokemonName);
//     this.ctx.body = 'success';
//   }
}

module.exports = PokemonsController;
