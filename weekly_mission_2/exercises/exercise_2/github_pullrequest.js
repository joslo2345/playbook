class PullRequest {
    constructor(title,branchName,author,dateCreated,
        status,repositoryNameAssociated){
        this.title = title;
        this.branchName = branchName;
        this.author = author;
        this.dateCreated = dateCreated;
        this.status = status;
        this.repositoryNameAssociated = repositoryNameAssociated;
    }

    getStatus(){
        return this.status;
    }

    getTitleAndAutor(){
        return `Title: ${this.title} \nAuthor: ${this.author}`
    }
}


let title = 'cambios al backend';
let branchName = 'modulo de mediciones';
let author = 'joslo2345';
let dateCreated = new Date();
let status = 'open';
let repositoryNameAssociated = 'prueba de cohete';

const myPullRequest = new PullRequest(title,branchName,author,
    dateCreated,status,repositoryNameAssociated);


console.log(myPullRequest.getTitleAndAutor());
console.log(`Status: ${myPullRequest.getStatus()}`);