const pokémon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

// 1--an array of pokémon objects where the id is evenly divisible by 3
// const pkmnIds = pokémon.map( p => p.id).filter(div => div % 3 === 0);
// console.log(pkmnIds);

// 2--an array of pokémon objects that are "fire" type
// const fire = pokémon.filter(fire =>fire.types.includes("fire"));
// console.log(fire);

// 3--an array of pokémon objects that have more than one type
// const multTypes = pokémon.filter(m => m.types.length > 1);
// console.log(multTypes);

// 4--an array with just the names of the pokémon
// const pknmNames = pokémon.map ( n => n.name );
// console.log(pknmNames);

// 5--an array with just the names of pokémon with an id greater than 99
// const largeNames = pokémon.filter(i => i.id >99).map (n => n.name);
// console.log(largeNames);

// 6--an array with just the names of the pokémon whose only type is poison
// const poison = pokémon.filter(p =>p.types.includes("poison") && p.types.length < 2);
// console.log(poison);

// 7--an array containing just the first type of all the pokémon whose second type is "flying"
// const typeFirst = pokémon.filter (t => t.types[1] === "flying").map (t => t.types[0]);
// console.log(typeFirst);

// 8--a count of the number of pokémon that are "normal" type
// const totalNormal = pokémon.filter(n => n.types.includes("normal")).length;
// console.log(totalNormal);