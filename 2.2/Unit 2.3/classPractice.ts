class Employee
id: number;
name: string;
phone: any;
email: string;

constructor(id: number, name: string, phone: any, email: string){
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.email = email;
}

toString(): string {
    let output =
    'Employee Record ID ${this.id}\n' +
    "Name: ${this.name}\n" +
    'Contract Information\n'+
    'Phone: ${this.phone}';
    
}
