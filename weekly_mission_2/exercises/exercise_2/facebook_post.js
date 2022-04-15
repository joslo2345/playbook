class Post  {

    constructor(hashtags,mentions,message){
    this.hashtags = hashtags;
    this.mentions = mentions;
    this.message = message;
    }

    getMessage(){
        console.log(this.message);
    }

    getHashTags(){
        console.log(this.hashtags);
    }

    getMentions(){
        console.log(this.mentions);
    }
}

let hashtags = ['launchx','innovaccion'];
let mentions = ['Jose','Rodrigo'];
let message = 'este es un gran curso @Jose @Rodrigo #launchx #innovaccion';

const myPost = new Post(hashtags,mentions,message);

myPost.getMessage();
myPost.getMentions();
myPost.getHashTags();