const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line
const owed = `R${parseFloat((leoBalance * -1) + (sarahBalance * -1)).toFixed(2)} \n`

const leo = `\n${leoName} ${leoSurname.substring(0,7)} (Owed: R${(parseFloat(leoBalance) * -1).toFixed(2)})`

const sarah = `\n${sarahName.substring(0,5)}  ${sarahSurname} (Owed: R${parseFloat(sarahBalance).toFixed(2) * -1})\n\n`

const total = `\n  Total amount owed: ${owed.substring(0, 3)} ${owed.substring(3, owed.length)}`

const result = leo + sarah + divider + total + divider

console.log(result)