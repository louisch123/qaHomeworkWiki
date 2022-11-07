var todos: Array<string> = [
    "Wash the car",
    "Get groceries",
    "Go to the gym",
    "Get Dinner",
]

for(let i= 0; i <todos. length; i++)  {
    console.log('Todo #${i + 1}; ${todos[i]} !')
    // for loops have first a declaeing variable, then a statement to chedk , then an increment or decrement statement
    // This loop will start at 0 with "i"(index). This will loop as long as there are items in the [array]
}

todos.forEach((todo) => {
    console.log(`You still need to${todo}! `)
})