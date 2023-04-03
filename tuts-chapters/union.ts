//Union
//When u are not sure of what type of type u are getting

let score: number | string = 33

score = 44

score = "55"

type User1 = {
    name: string;
    id: number;
}

type Admin = {
    username: string;
    id: number;
}

let hitesh: User1 | Admin = {
    name: "hitesh",
    id: 3445
}

// function getDbId(id: number | string) {
//     console.log(`DB id id: ${id}`)
// }

getDbId(3)
getDbId("gh")

function getDbId(id: number | string) {
    if (typeof id === "string") {
        id.toUpperCase()
    }
    // id + 2
}

//array union
const data: (string | number | boolean)[] = [1, 2, 3, 4, "5"]

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
// seatAllotment = "crew"