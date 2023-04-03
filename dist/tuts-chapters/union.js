"use strict";
//Union
//When u are not sure of what type of type u are getting
let score = 33;
score = 44;
score = "55";
let hitesh = {
    name: "hitesh",
    id: 3445
};
// function getDbId(id: number | string) {
//     console.log(`DB id id: ${id}`)
// }
getDbId(3);
getDbId("gh");
function getDbId(id) {
    if (typeof id === "string") {
        id.toUpperCase();
    }
    // id + 2
}
//array union
const data = [1, 2, 3, 4, "5"];
let seatAllotment;
seatAllotment = "aisle";
// seatAllotment = "crew"
