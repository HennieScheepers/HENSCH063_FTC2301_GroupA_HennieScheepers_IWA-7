const nickname= null;
const firstname = null;
const greeting = nickname || firstname ? `Good morning, ${nickname || firstname}!` : 'Good morning!'

console.log(greeting)

/*The code did not work because there was no conditional to check if the firstname or nickname was present.
* We need to add a conditional to check if they have values otherwise it should return a generic greeting.
* We also need to use backticks when we interpolate*/