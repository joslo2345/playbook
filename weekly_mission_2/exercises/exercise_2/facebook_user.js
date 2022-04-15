class User {

    constructor(name,nickname,age,address,birthDate){
    this.name = name;
    this.nickname =  nickname;
    this.age = age;
    this.address = address;
    this.birthDate = birthDate;
    }

    getInfo(){
        let information = `
        name: ${this.name}
        nickname: ${this.nickname}
        age: ${this.age}
        address: ${this.address}
        birthdate: ${this.birthDate}`;

        console.log(information);
    }

    getNameAndNickname(){
        let information = `
        name: ${this.name}
        nickname: ${this.nickname}`;

        console.log(information);
    }
}

let name = "Jose";
let nickname = 'joslo2345';
let age = 30;
let address = {
    city: 'seattle',
    state: 'Washington',
    Country: 'United states'
};
let birthDate =  new Date();

const myUser = new User(name,nickname,age,address,birthDate);

myUser.getInfo();
myUser.getNameAndNickname();