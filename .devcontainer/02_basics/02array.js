const marvelHeroes = ["thor","ironman","spiderman"]
const dc= ["superman","flash","batman"]

marvelHeroes.push(dc)
console.log(marvelHeroes);   // array in array

const allHeroes = marvelHeroes.concat(dc)
console.log(allHeroes);

const allHeroesn = [...marvelHeroes, ...dc]
console.log(allHeroesn);

console.log(Array.isArray("komal"))
console.log(Array.from("komal"))  // convert in array

console.log(Array.from({name: "komal"}));  //interesting ans: Enpty array []