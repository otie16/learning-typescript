type User = {
    name: string;
    email: string;
    isReactive: boolean,
}

function createUser(user: User): User {
    return { name: "", email: "", isReactive: false }
}

createUser({name:"", email: "", isReactive: false})

export{}