console.log("\nAn Array of Objects\n") // Anonymous Array

var people = [
    {
        firstName: "Arthur",
        lastName: "Morgan",
        age:36
    

    },
    {
        firstName: "John",
        lastName: "Marston",
        age:26

    }
]

people.forEach((person) => {
   console.log ( `Person:\n "${person.firstName} ${person.lastName} \n Age: ${person.age}`)
   
})

console.log(`\n An oject with an Array\n`)

var myPersonWithAnArray = {
    firstName: "Louis",
    lastName: "Haynes",
    Age: 40
}
console.log(`\n Name: ${myPersonWithAnArray.firstName} ${myPersonWithAnArray.lastName} \n Age: ${myPersonWithAnArray.Age}`)