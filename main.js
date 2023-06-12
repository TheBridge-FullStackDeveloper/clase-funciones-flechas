// function sum(a, b) {
//   return a + b;
// }

// const sum =  (a, b) => {
//   return a + b;
// };

// const sum = (a, b) => a + b;
// console.log(sum(2, 3));

const test = (a) => a;
// console.log(test("hola"));
const test2 = () => "sin paramatros";
// console.log(test2());

//* Métodos de las arrays
const fruits = ["manzana", "pera", "sandía", "platano"];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// fruits.forEach((fruit) => {
//   console.log(fruit);
// });
// fruits.forEach((fruit) => console.log(fruit));

const canciones = ["Hang onto yourself", "Go your own way", "Modern Love"];

canciones.forEach((cancion, indice, array) => {
  console.log("Elemento actual", cancion, "índice", indice, "array", array);
});

const myArray = [1, 2, 3, 4];

const myArrayTimesTwo = myArray.map((value) => {
  return value * 2;
});

console.log(myArrayTimesTwo);

const songs = [
  { name: "Curl of the Burl", artist: "Mastodon" },
  { name: "Oblivion", artist: "Mastodon" },
  { name: "Flying Whales", artist: "Gojira" },
  { name: "Euralio y sus cabras", artist: "Euralio" },
];

// const allSongNames = [];

// for (const song of songs) {
//   allSongNames.push(song.name);
// }

// songs.forEach(song => allSongNames.push(song.name))

const allSongNames = songs.map((song) => song.name);

// console.log(allSongNames)

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numerosFiltrados = numeros.filter((numero) => numero > 5);

console.log(numerosFiltrados);

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

// let result = [];
// for (const word of words) {
//   if (word.length > 6) {
//     result.push(word);
//   }
// }

let result = words.filter((word) => word.length > 6);

// console.log(result);

const numbers = [10,5,7]

const sum = numbers.reduce((a,b)=> a + b,5)
console.log(sum)

