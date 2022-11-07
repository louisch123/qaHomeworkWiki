class Bird {
    name: string;
    canFly: boolean;
    hasFeathers: boolean = true;

   constructor(name:string, canFly: boolean) { // Consturctor builds the extended class
    this.name = name;
    this.canFly = canFly;

   }
   flapwings(){ 
    if (this.canFly)
    console.log(`${this.name} flaps its wings and takes off into the air`)
    else 
console.log(`${this.name} can't fly and is grounded`)
   }
}

let bird: Array<Bird> = [  // Method
    new Bird("Toucan", true),
    new Bird("Penguin", false),
    new Bird("Dove", true),
    new Bird("Emu", false)
]
bird.forEach((item: Bird) =>{
    item.flapwings()
})

/* Callbacks- Chain Functionality> Passing a functiion into another function