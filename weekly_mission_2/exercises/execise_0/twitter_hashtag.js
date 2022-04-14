const hashtag = {
    title: 'launchx',
    numberOfUses: 10000,
    usersLinked: ['joslo2345','superman2134','explorer1'],
    getTitle: function(){
        return this.title;
    },
    getUsers: function(){
        return this.usersLinked;
    }
}

console.log(`Title of the hashtag is  ${hashtag.getTitle()} and the users linked to it ${hashtag.getUsers()}`);