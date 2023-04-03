abstract class TakePhotos {
    constructor(
        public cameraMode: string,
        public filter : string
    ) { }
    
    abstract getSepia(): void
    getReelTime(): number {
        //some complex calculation
        return 8
    }
}



class Snapchat extends TakePhotos {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {
        super(cameraMode, filter);
    }
    getSepia(): void{
        console.log("Sepia")
    }
}

//Objects acn be created from the class inheriting it
const hamesh = new Snapchat("test", "Test", 1);

hamesh.getReelTime()