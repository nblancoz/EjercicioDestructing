// Ejercicio 1
// Punto 1
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];

const [, ana] = empleados;
console.log(ana);

const [luis] = empleados;
const { email } = luis;
console.log(email);

// Punto 2
const pokemon = {
    name: "Bulbasaur",
    type: "grass",
    ability: {
        "primary": "Overgrow",
        "hidden": "Chlorophyll"
    },
    stats: {
        hp: 45,
        attack: 49,
        deffense: 59,
        speed: 45
    },
    moves: [
        "Growl", "Tackle", "Vine Whip", "Razor Leaf"
    ]
}
const { name: nombre } = pokemon;
console.log(nombre);

const { type } = pokemon;
console.log(type);

const { moves } = pokemon;
const [, Tackle] = moves;
console.log(Tackle)

// Ejercicio 2
// Punto 1
const pikachu = {
    name: "Pikachu",
    type: "electric",
    ability: {
        "primary": "Static",
        "hidden": "Lightning rod"
    },
    stats: {
        hp: 35,
        attack: 55,
        deffense: 40,
        speed: 90
    },
    moves: [
        "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
    ],
}
const merge = { ...pokemon, ...pikachu };
console.log(merge);

// Punto 2
const sumEveryOther = (...suma) => {
    return suma.reduce((a, b) => a + b);
};
console.log(sumEveryOther(6, 8, 2, 3, 1)); //20
console.log(sumEveryOther(11, 3, 12)); //26 

// Punto 3
const addOnlyNums = (...num) => {
    const number = num.filter((num) => typeof num === 'number')
    return number.reduce((a, b) => a + b);
};
console.log(addOnlyNums(1, 'perro', 2, 4)); //7

// Punto 4
const countTheArgs = (...args) => {
    return args.length;
};
console.log(countTheArgs('gato', 'perro')); //2
console.log(countTheArgs('gato', 'perro', 'pollo', 'oso')); //4

// Punto 5
const combineTwoArrays = (arr1, arr2) => {
    return [...arr1, ...arr2]
}
console.log(combineTwoArrays(["hola"], ["hola otra vez"]))

// Extras
// Ejercicio 1
const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
};
const { today: maximaHoy } = HIGH_TEMPERATURES;
console.log(maximaHoy)
const { tomorrow: maximaManana } = HIGH_TEMPERATURES;
console.log(maximaManana)

// Ejercicio 2
const onlyUniques = (...args2) => {
    const uniqueSet = new Set(args2); // el set automaticamente elimina elementos duplicados
    return [...uniqueSet];
};
console.log(onlyUniques('gato', 'pollo', 'cerdo', 'cerdo'));
//['gato', 'pollo', 'cerdo']
console.log(onlyUniques(1, 1, 2, 2, 3, 6, 7, 8)); //[1, 2, 3, 6, 7, 8]

// Ejercicio 3
const combineAllArrays = (...arr) => {
    return [].concat(...arr) // concat une arrays
};
console.log(combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1])) // [3, 6, 7, 8, 2, 7, 3, 1]
console.log(combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1])); // [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]

// Ejercicio 4
const sumAndSquare = (...args3) => {
    const squared = args3.map((value) => value ** 2);
    const sum = squared.reduce((a, b) => a + b)
    return sum;
};
console.log(sumAndSquare(2, 4, 6))