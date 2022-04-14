const trendingTopic = {
    title: 'programación',
    numberTweets: 1000000,
    usersLinked: ['joslo2345','superman2134','explorer1'],
    numberOfPhotos: 2000,
    numberOfVideos: 300,
    getInfo: function(){
        info = `Title of the trendingtopic is ${this.title}
        number of tweets that use it ${this.numberTweets}
        users linked to the trending topic ${this.usersLinked}
        the number of photos that use it ${this.numberOfPhotos}
        the number of videos that use it ${this.numberOfVideos}
        `
        console.log(info)
    },
    getTitle: function(){
        console.log(this.title)
    }
}

trendingTopic.getInfo();
trendingTopic.getTitle();