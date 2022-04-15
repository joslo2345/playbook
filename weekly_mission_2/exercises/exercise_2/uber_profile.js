class Profile {
    constructor(name,nickname,age,address,birthDate,rating){
        this.name = name;
        this.nickname = nickname;
        this.age = age;
        this.address = address;
        this.birthDate = birthDate;
        this.rating = rating;
    }

    getInfo(){
        let information = `name: ${this.name}
nickname: ${this.nickname}
age: ${this.age}
address: ${JSON.stringify(this.address)}
birthdate: ${this.birthDate}
rating: ${this.rating}`;

        console.log(information);
    }

    getNickNameAndRating(){
        console.log(`the user ${this.nickname} has a rating of ${this.rating}`)
    }
}

let name = "Jose";
let nickname = 'joslo2345';
let age = 30;
let address =  {
        city: 'seattle',
        state: 'Washington',
        Country: 'United states'};
let birthDate =  new Date();
let rating =  4.56;

const myProfile = new Profile(name,nickname,age,address,birthDate,rating);
console.log('The information about the profile: ');
myProfile.getInfo();
myProfile.getNickNameAndRating();