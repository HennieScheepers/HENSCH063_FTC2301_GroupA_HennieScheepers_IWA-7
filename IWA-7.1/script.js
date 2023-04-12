// Removed double quotes from value
const value = 3
console.log(value + 4 + value)

/*The problem with this code is that as soon as values get added together and there is a string, 
* everything ofter the string gets coerced into a string and therefore the values get concatenated*/