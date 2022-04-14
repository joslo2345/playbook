const user = {
    name: "Jose",
    nickname: 'joslo2345',
    age: 30,
    address: {
        city: 'seattle',
        state: 'Washington',
        Country: 'United states'
    },
    birthDate: new Date(),
    getInfo: function(){
        information = `
        name: ${this.name}
        nickname: ${this.nickname}
        age: ${this.age}
        address: ${this.address}
        birthdate: ${this.birthDate}
        `;
        console.log(information);
    },
    getNameAndNickname: function(){
        information = `
        name: ${this.name}
        nickname: ${this.nickname}
        `;
        console.log(information);
    }
}

user.getInfo();
user.getNameAndNickname();