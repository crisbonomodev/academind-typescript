// Intersection Types
// Podemos usar multiples tipos para crear una interseccion 

type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type SuperUser = Admin & Employee;

const user: SuperUser = {
    name: 'Cristian',
    privileges: ['create-server'],
    startDate: new Date() 
};

// Tambien podemos hacer interseccion de tipos mas simples

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;