goog.provide('pokemon.queries');
goog.require('cljs.core');
pokemon.queries.pokemon = "\nquery($name: String!){\n  pokemon(name: $name){\n    id\n    name\n    number\n    image\n    types\n    evolutions{\n      name\n    }\n  }\n}\n";
pokemon.queries.pokemons = "\nquery ($first: Int!){\n  pokemons(first: $first){\n    id\n    name\n    number\n  }\n}  \n  ";

//# sourceMappingURL=pokemon.queries.js.map
