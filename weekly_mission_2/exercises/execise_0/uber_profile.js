const profile = {
    name: "Jose",
    nickname: 'joslo2345',
    age: 30,
    address: {
        city: 'seattle',
        state: 'Washington',
        Country: 'United states'
    },
    birthDate: new Date(),
    rating: 4.56,
    getInfo: function(){
        information = `
        name: ${this.name}
        nickname: ${this.nickname}
        age: ${this.age}
        address: ${JSON.stringify(this.address)}
        birthdate: ${this.birthDate}
        rating: ${this.rating}
        `;
        console.log(information);
    },
    getNickNameAndRating: function(){
        console.log(`the user ${this.nickname} has a rating of ${this.rating}`)
    }
};

profile.getInfo();
profile.getNickNameAndRating();
