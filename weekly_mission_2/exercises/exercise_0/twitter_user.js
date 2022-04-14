const user = {
    name: 'Jose',
    username: 'joslo2345',
    bio: 'Science user, coffee lover',
    age: 22,
    follows: 102,
    followers: 104,
    address: 'Mexico',
    tweets: 105,
    getNameAndUsername: function(){
        console.log(`Name: ${this.name}, Username: ${this.username}`);
    },
    getFollowsAndFollowers: function(){
        console.log(`Follows: ${this.follows}, Followers: ${this.followers}`)
    }
}

user.getNameAndUsername();
user.getFollowsAndFollowers();