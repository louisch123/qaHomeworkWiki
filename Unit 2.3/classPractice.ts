class Employee{
id: number;
name: string;
phone: any;
email: string;
}
constructor(id: number, name: string, phone: any, email: string){
    this.id = id; // this iniializes the constructor parameters
    this.name = name;
    this.phone = phone;
    this.email = email;
}

toString(): string { // controls how info is displayed
    let output =
    'Employee Record ID ${this.id}\n' +
    "Name: ${this.name}\n" +
    'Contact Information\n'+
    'Phone: ${this.phone}' +
    'Email: ${this.email}' ;
    return output
}

let firstEmployee = new Employee(
    8,
    "Alision Kind",
    9785169628,
    "gotom@yahoo.com"


)
console.log(firstEmployee.toString())

// Birb Class

class Birb {
    name: string;
    canFly: boolean;
    hasFeathers: boolean = true;

    constructor(name: string, canFly: boolean) {
        this.name = name;
        this.canFly = canFly;
        
    }
}

let birb: Array<Birb> = [
    new Birb("Toucan", true),
    new Birb("Penguin", false),
    new Birb("Red Robin", true),
    new Birb("Dove", true),
    new Birb("Emu", false)

]
birb.forEach((item:Birb) =>{
    console.log( item)
})

/*  Method- 