type User = {
    readonly _id : string
    name: string
    email: string
    isActive: boolean
    creaditCardDetails?: number
}

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    carddate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

let myCardDetails: cardDetails = {
    cardnumber: "",
    carddate: "",
    cvv: 123
}

let myUser: User = {
    _id: "12345",
    name: "h",
    email: "h@example.com",
    isActive: false
}

// myUser._id = "asa"
export{}