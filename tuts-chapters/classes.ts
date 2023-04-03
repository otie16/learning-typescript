//Classes and generic
interface Database {
    connection: string;
    username: string;
    password: string;
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}

anotherFunction(3, { connection: "secure", username: "oty", password: "try" })


interface Quiz{
    name: string
    type: string
}

interface Course{
    name: string
    author: string
    subject: string
}

class Sellable<T>{
    public cart: T[] = [];

    addToCart(products: T){
        this.cart.push(products)
    }
    
}