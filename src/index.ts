console.log("typescript is here");
console.log("typescript is amazing");

// classes
// class Users {
//     public email: string
//     private name: string
//     readonly city: string = "Japan"
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name;
//         this.city = name
//     }
// }

//Access Modifiers
// public
// private
// protected

class Users {

    // private _courseCount = 1;
    protected _courseCount = 1;
    readonly city: string = "Japan";
    constructor(
        public email: string,
        public name: string,
        private userId: string,
    ) { }

    //A private method
    private deleteToken() {
        console.log("Token Deleted");
    }

    get getAppleEmail(): string {
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this.courseCount;
    }

    set courseCount(courseNum: number) {
        if (courseNum <= 1) {
            throw new Error("Course Count must be greater than 1")
        }
        this._courseCount = courseNum;
    }
}

// Inheritance
class SubUser extends Users {
    //The property of private in the parent class cannot be acquired here
    // in the child class because private can only be acquired in the class in which it is defined
    
    isFamily: boolean = true
    changeCourseCount() {
        // this._courseCount = 4
        this._courseCount = 4
    }

}

// const user1 = new Users("hea@gmail.com", "hea");
// user1.city
// user1.name
