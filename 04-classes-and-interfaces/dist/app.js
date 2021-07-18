"use strict";
// Uso de clases en Typescript
class Department {
    // Constructor
    constructor(name) {
        this.name = name;
    }
    //Getters/Setters
    get Name() {
        return this.name;
    }
    set Name(value) {
        this.name = value;
    }
}
const salesDepartment = new Department('Sales');
console.log(salesDepartment.Name);
salesDepartment.Name = 'Marketing';
console.log(salesDepartment.Name);
console.log(salesDepartment);
//# sourceMappingURL=app.js.map