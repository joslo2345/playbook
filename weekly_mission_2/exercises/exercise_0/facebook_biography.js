const biography = {
    name: "Jose",
    nickname: 'joslo2345',
    age: 30,
    address: {
        city: 'seattle',
        state: 'Washington',
        Country: 'United states'
    },
    birthDate: new Date(),
    posts: ['post_1','post_2','post_3'],
    friends: ['explorer_1','explorer_2','explorer_3'],
    photos: ['photo_1','photo_2','photo_3'],
    getInfo: function(){
        information = `
        name: ${this.name}
        nickname: ${this.nickname}
        age: ${this.age}
        address: ${this.address}
        birthdate: ${this.birthDate}
        posts: ${this.posts}
        friends: ${this.friends}
        photos: ${this.photos}
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

biography.getInfo();
biography.getNameAndNickname();