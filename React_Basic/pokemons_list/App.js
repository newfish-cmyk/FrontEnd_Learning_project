const App = () => {
    const [pokemons, setPokemons] = React.useState([]);
    const [filteredPokemons, setFilteredPokemons] = React.useState([]);

    React.useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon")
        .then(res => res.json())
        .then(json => {
            json.results.map((result, index) => {
                result.id = index + 1;
            });
            setPokemons(json.results);
            setFilteredPokemons(json.results);
            });
        }, [])

    const onChangeHandler = event => {
        const comparedPokemons = pokemons.filter(pokemon => {
            return pokemon.name.includes(event.target.value);
        });
        setFilteredPokemons(comparedPokemons);
    };

    return (
        <div>
            <h1> Pokemons </h1>
            <Input onChangeHandler={ onChangeHandler } />
            <Lists pokemonsLists = { filteredPokemons } />
        </div>
    );
}