import { generate, count } from "random-words";

console.log(
    generate({
      exactly: 5,
      wordsPerString: 2,
      formatter: (word) => word.toUpperCase(),
    })
  );
  //output: [ 'HAVING LOAD', 'LOST PINE', 'GAME SLOPE', 'SECRET GIANT', 'INDEED LOCATION' ]
  
  console.log(
    generate({
      exactly: 5,
      wordsPerString: 2,
      formatter: (word, index) => {
        return index === 0
          ? word.slice(0, 1).toUpperCase().concat(word.slice(1))
          : word;
      },
    })
  );