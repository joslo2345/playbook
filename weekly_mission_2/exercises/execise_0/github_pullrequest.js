const pullRequest = {
    title: 'cambios al backend',
    branchName: 'modulo de mediciones',
    author: 'joslo2345',
    dateCreated: new Date(),
    status: 'open',
    repositoryNameAssociated: 'prueba de cohete',
    getStatus: function(){
        return this.status;
    },
    getTitleAndAutor: function(){
        return `Title: ${this.title} \nAuthor: ${this.author}`
    }
}

console.log(pullRequest.getTitleAndAutor());
console.log(`Status: ${pullRequest.getStatus()}`);