// Uso de clases en Typescript
class Department {
    //Props
    private name: string;

    // Constructor
    constructor(name: string) {
        this.name = name;
    }

    //Getters/Setters
    public get Name() : string {
        return this.name;
    }
    
    public set Name(value : string) {
        this.name = value;
    }

}

const salesDepartment = new Department('Sales');
console.log(salesDepartment.Name);
salesDepartment.Name = 'Marketing';
console.log(salesDepartment.Name);
console.log(salesDepartment);