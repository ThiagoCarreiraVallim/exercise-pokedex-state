import React from 'react';
import Pokemon from './Pokemon';
import Buttons from './Buttons';
import './Pokedex.css'

class Pokedex extends React.Component {


  constructor() {
    super();
    this.changePokemon = this.changePokemon.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.setAll = this.setAll.bind(this);
    this.state = {
      nPokemon: 0,
      filter: 'Fire',
      all: false
    }
  }

  changePokemon(list) {
    if (this.state.nPokemon < list.length - 1) {
      this.setState((last, _props) => ({
        nPokemon: last.nPokemon + 1,
      }));
    } else {
      this.setState(() => ({
        nPokemon: 0,
      }));
    }
  }

  handleClick(type = this.state.filter) {
    this.setState(() => ({
      nPokemon: 0,
      filter: type,
      all: false
    }));
  }

  setAll() {
    this.setState({all: true})
  }

  render() {
      const { pokemons } = this.props;
      const filtros = pokemons.reduce((acc, value) => {
        if (!acc.includes(value.type)) acc.push(value.type)
        return acc
      },[])
      const pokemonsList = this.state.all ? pokemons : pokemons.filter(pokemon => pokemon.type === this.state.filter);
      let size = false;
      if (pokemonsList.length < 2) {
        size = true;
      }
        return (
            <div className="pokedex">
              <div className="pokemons">
                {<Pokemon pokemon={pokemonsList[this.state.nPokemon]} />}
              </div>
              <div className="buttonsType">
                <Buttons click={this.setAll} disabled={false} text={"All"}/>
                {filtros.map((type) =>
                  <Buttons text={type} click={() => this.handleClick(type)} disabled={false} key={type} />
                )}
              </div>
              <div className="nextButton">
                <Buttons click={() => this.changePokemon(pokemonsList)} disabled={size} text={"Proximo Pokemon"} />
              </div>
            </div>
        );
    }
}

export default Pokedex;