interface Address {
    city: string;
    country: string;
}

interface Mango {
    name: string;
    age: number;
    email: string;
    address?: Address;
}



const mango: Mango = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com',
    address: {
        city: 'New York',
        country: 'USA'
    }
};

const poly: Mango = {
    name: 'Poly',
    age: 25,
    email: 'poly@example.com'
};


