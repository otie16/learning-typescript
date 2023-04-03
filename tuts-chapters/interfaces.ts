//Interfaces
interface User {
    readonly db_id: string;
    email: string,
    userId: number,
    google_id?: string
    // startTrial: () => string
    //or
    startTrial(): string
    getCoupon(couponname: string, value: number): number
}

// reopening the interface
interface User{
    githubToken: string
}

// inheritance with interface
interface Admin extends User {
    role:"admin" | "pro" | "learner"
}

const hitesh: Admin = {
    db_id: "A006543bhs54gh",
    role: "admin",
    email: 'user@example',
    userId: 123,
    githubToken: "github",
    startTrial: () => {
        return "trial started"
    },
    getCoupon: (name: "hitesh", off: 1) => {
        return 10
    }
}


hitesh.email = "userttr@example.com"
// hitesh.db_id = "5342yfy"



export { }