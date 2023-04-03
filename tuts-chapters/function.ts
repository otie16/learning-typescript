function addTwo(num: number): number {
    return num + 2
    // return "hello"
}
function getUpper(val: string) {
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean) { }

let loginUser = (name: string, email: string, isPaid: boolean = true) => { }

addTwo(5)
getUpper("h")
signUpUser("hamesh", "hamesh@gmail.com", true)
loginUser("hamesh", "hamesh@gmail.com")

function getValue(myValue: number) {
    if (myValue > 5) {
        return true
    }
    return "200 OK"
}

const getHello = (s: string): string => {
    return ""
}

const heros = ["thor", "spiderman", "ironman"]
const heroAndNumbers: (string | number)[] = [1, 2, "ironman"]

heros.map((hero): string => {
    return `hero is ${hero}`
})


function consoleError(errmsg: string):void {
    console.log(errmsg)
}

function handleError(errmsg: string): never {
    throw new Error(errmsg)
}

export { }