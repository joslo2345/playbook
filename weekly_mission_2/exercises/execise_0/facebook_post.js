const post = {
    length: 300,
    hashtags: ['launchx','innovaccion'],
    mentions: ['Jose','Rodrigo'],
    message: 'este es un gran curso @Jose @Rodrigo #launchx #innovaccion',
    getMessage: function(){
        console.log(this.message);
    },
    getHashTags: function(){
        console.log(this.hashtags);
    },
    getMentions: function(){
        console.log(this.mentions);
    }
}

post.getMessage();
post.getMentions();
post.getHashTags();