class Biography {
    constructor(name,nickname,age,address,birthDate,
        posts,friends,photos){
        this.name = name;
        this.nickname = nickname;
        this.age = age;
        this.address = address;
        this.birthDate = birthDate;
        this.posts = posts;
        this.friends = friends;
        this.photos = photos;
    }

    getInfo() {
        let information = `
        name: ${this.name}
        nickname: ${this.nickname}
        age: ${this.age}
        address: ${this.address}
        birthdate: ${this.birthDate}
        posts: ${this.posts}
        friends: ${this.friends}
        photos: ${this.photos}`;

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
let age =  30;
let address = {
    city: 'seattle',
    state: 'Washington',
    Country: 'United states'
};
let birthDate = new Date();
let posts = ['post_1','post_2','post_3'];
let friends = ['explorer_1','explorer_2','explorer_3'];
let photos = ['photo_1','photo_2','photo_3'];

const myBiography = new Biography(name,nickname,age,address,birthDate
    ,posts,friends,photos);

myBiography.getInfo();
myBiography.getNameAndNickname();