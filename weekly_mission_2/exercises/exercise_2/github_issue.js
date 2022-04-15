class Issue {
    constructor(title,repositoryNameAssociated,status,numberOfComments,
        labels,author,dateCreated,lastUpdated){
        this.title = title;
        this.repositoryNameAssociated = repositoryNameAssociated;
        this.status = status;
        this.numberOfComments = numberOfComments;
        this.labels = labels;
        this.author = author;
        this.dateCreated = dateCreated;
        this.lastUpdated = lastUpdated;
    }

    getTitle(){
        return this.title;
    }

    getAuthor(){
        return this.author;
    }

    getTitleAndAuthor(){
        console.log(`Title: ${this.title} \nAuthor: ${this.author} `)
    }

    getGeneralInfo(){
        let generalInfo = `
        Title: ${this.title} \n
        Repository associated: ${this.repositoryNameAssociated} \n
        Number of comments: ${this.numberOfComments} \n
        Labels: ${this.labels} \n
        Author: ${this.author} \n
        Date of creation: ${this.dateCreated} \n
        Last updated: ${this.lastUpdated}`;
        return generalInfo;
    }
}

let title = 'problema en el backend';
let repositoryNameAssociated = 'playbook';
let status =  'open';
let numberOfComments = '3';
let labels = ['nodejs','javascript','backend'];
let author = 'joslo2345';
let dateCreated = new Date();
let lastUpdated = new Date();

const myIssue = new Issue(title,repositoryNameAssociated,status,
    numberOfComments,labels,author,dateCreated,lastUpdated);

console.log('Title of the issue' + ' "' + myIssue.getTitle() + '" ');
console.log('Author of the issue ' + myIssue.getAuthor());
console.log('\n\n');
myIssue.getTitleAndAuthor();
console.log("General info: \n", myIssue.getGeneralInfo());


